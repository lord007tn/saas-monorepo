import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';

/**
 * setRequestLanguage plugin that changes language based on Accept-Language header.
 *
 */
async function setRequestLanguage(fastify: FastifyInstance) {
  fastify.addHook('preHandler', async (request, reply) => {
    // @ts-ignore
    const lng = request.language;
    // @ts-ignore
    await fastify.i18n.changeLanguage(lng);
  });
}

export default fp(setRequestLanguage, {
  name: 'set-request-language',
  dependencies: ['i18next'],
});
