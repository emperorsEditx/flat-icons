import { Injectable } from '@nestjs/common';
import { IconStatus, IconStyle, IconType, prisma } from '@icons/db';
import { join } from 'path';
import * as fs from 'fs';
import * as util from 'util';

const mkdir = util.promisify(fs.mkdir);

interface UploadedFile {
  originalname: string;
  buffer: Buffer;
  mimetype: string;
}

@Injectable()
export class IconsService {
  private uploadRoot = join(__dirname, '..', '..', '..', 'uploads', 'icons');

  async saveIcon(
    file: UploadedFile,
    categoryId: number,
    style: 'OUTLINE' | 'FILL',
    createdBy: number,
  ) {
    const categoryPath = join(this.uploadRoot, style, String(categoryId));

    if (!fs.existsSync(categoryPath)) {
      await mkdir(categoryPath, { recursive: true });
    }

    const filename = `${Date.now()}-${file.originalname}`;
    const filepath = join(categoryPath, filename);

    fs.writeFileSync(filepath, file.buffer);

    // Save to DB
    const icon = await prisma.icon.create({
      data: {
        title: file.originalname,
        path: `uploads/icons/${style}/${categoryId}/${filename}`,
        type: IconType.PNG,
        style: IconStyle.OUTLINE,
        category_id: categoryId,
        created_by: createdBy,
        status: IconStatus.PENDING,
      },
    });

    return icon;
  }

  async getIcons(categoryId: number, style?: 'OUTLINE' | 'FILL') {
    return prisma.icon.findMany({
      where: { category_id: categoryId, style },
    });
  }
}
