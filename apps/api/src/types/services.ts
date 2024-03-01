import { PrismaClient } from '@saas-monorepo/database';

export type AbstractServiceOptions = {
  prisma: PrismaClient;
};
