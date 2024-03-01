import { Prisma, PrismaClient, User } from '@saas-monorepo/database';

import { AbstractServiceOptions } from '../types/services.js';

export class UsersService {
  prisma: PrismaClient;
  constructor(options: AbstractServiceOptions) {
    this.prisma = options.prisma;
  }
  async getLoggedUserData(id: string) {
    try {
      return await this.prisma.user.findUniqueOrThrow({
        where: {
          id: id,
        },
      });
    } catch (err: any) {
      throw err
  }}
}
