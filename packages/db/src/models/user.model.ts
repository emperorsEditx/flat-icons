// packages/db/src/models/user.model.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export class UserModel {
  static async createUser(data: {
    name: string;
    email: string;
    username: string;
    password: string;
    avatar?: string;
    bio?: string;
  }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  static async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  static async findByUsername(username: string) {
    return prisma.user.findUnique({
      where: { username },
    });
  }

  static async verifyPassword(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword);
  }

  static async updateProfile(id: string, updates: Record<string, any>) {
    return prisma.user.update({
      where: { id },
      data: updates,
    });
  }

  static async deleteUser(id: string) {
    return prisma.user.delete({
      where: { id },
    });
  }
}
