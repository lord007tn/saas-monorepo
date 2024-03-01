import multipart, { FastifyMultipartOptions } from '@fastify/multipart';
import fp from 'fastify-plugin';

/**
 * Fastify plugin to parse the multipart content-type.
 *
 * @see https://github.com/fastify/fastify-multipart
 */
export default fp<FastifyMultipartOptions>(
  async (fastify) => {
    fastify.register(multipart, {
      attachFieldsToBody: true,
    });
  },
  {
    name: 'multipart',
  },
);
