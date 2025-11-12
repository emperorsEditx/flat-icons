// packages/db/src/index.ts
import { PrismaClient } from '../prisma/generated/client/index.js';

const prisma = new PrismaClient();

export { prisma };
export * from '../prisma/generated/client/index.js';
