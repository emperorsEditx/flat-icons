import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signup(dto: SignupDto) {
    const existingUser = await this.prisma.client.user.findUnique({ where: { email: dto.email } });
    if (existingUser) throw new BadRequestException('Email already exists');

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.client.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: hashedPassword,
      },
    });

    return { message: 'User created successfully', user: { id: user.id, email: user.email, name: user.name } };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.client.user.findUnique({ where: { email: dto.email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid credentials');

    const payload = { id: user.id, email: user.email, role: user.role };
    const token = this.jwtService.sign(payload);

    return { accessToken: token, user: { id: user.id, name: user.name, email: user.email } };
  }
}
