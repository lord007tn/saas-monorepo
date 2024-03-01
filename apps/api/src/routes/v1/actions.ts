import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const { prisma } = fastify;
  fastify.get(
    '/health',
    {
      schema: {
        tags: ['health'],
        description: 'Health check',
      },
    },
    async function (request, reply) {
      try {
        await prisma.$queryRaw`SELECT 1`;

        return reply.status(200).send({
          status: 'ok',
          message: 'All systems operational',
        });
      } catch (err: any) {
        console.error(err);

        throw err;
      }
    },
  );
};

export default routes;
