import formbody, { FastifyFormbodyOptions } from '@fastify/formbody';
import fp from 'fastify-plugin';

/**
 * adds a content type parser for the content type application/x-www-form-urlencoded.
 *
 * @see https://github.com/fastify/formbody
 */
export default fp<FastifyFormbodyOptions>(
  async (fastify) => {
    fastify.register(formbody);
  },
  {
    name: 'form-body',
  },
);
