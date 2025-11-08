import { PrismaClient } from './generated/client'

declare global {
  // Prevent multiple instances during dev hot reload
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
