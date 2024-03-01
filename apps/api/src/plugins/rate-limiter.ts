import ratelimit, { FastifyRateLimitOptions } from '@fastify/rate-limit';
import fp from 'fastify-plugin';

/**
 * A low overhead rate limiter for your routes.
 *
 * @see https://github.com/fastify/fastify-rate-limit
 */
export default fp<FastifyRateLimitOptions>(
  async (fastify) => {
    fastify.register(ratelimit, {
      max: 100,
      timeWindow: '1 minute',
    });
  },
  {
    name: 'rate-limiter',
  },
);
