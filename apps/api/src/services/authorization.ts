import jwt from 'jsonwebtoken';

import { Prisma, PrismaClient } from '@saas-monorepo/database';

import { AbstractServiceOptions } from '../types/services.js';

export class AuthorizationService {
  prisma: PrismaClient;
  constructor(options: AbstractServiceOptions) {
    this.prisma = options.prisma;
  }

  async verifyAccessToken(token: string) {
    let payload = null;
    try {
      payload = jwt.verify(token, process.env['ACCESS_TOKEN_SECRET'] as string)  as {
        id: string;
        email: string;
      };
    } catch (err) {
     throw err
    }

    try {
      return await this.prisma.user.findUniqueOrThrow({
        where: { id: payload.id },
      });
    } catch (err: any) {
      throw err
    }
  }
}
