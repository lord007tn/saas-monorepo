import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

import { prisma } from '@saas-monorepo/database';

export declare type FastifyPrismaOptions = {};
/**
 * Add Prisma instance to fastify
 */
async function fastifyPrisma(fastify: FastifyInstance, options: FastifyPrismaOptions) {
  fastify.decorate('prisma', prisma);
}
export default fp(fastifyPrisma, {
  name: 'prisma',
});
