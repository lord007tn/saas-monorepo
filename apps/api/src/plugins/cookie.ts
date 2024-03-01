import cookie, { FastifyCookieOptions } from '@fastify/cookie';
import fp from 'fastify-plugin';

/**
 * A plugin for Fastify that adds support for reading and setting cookies.
 *
 * @see https://github.com/fastify/fastify-cookie
 */
export default fp<FastifyCookieOptions>(
  async (fastify) => {
    fastify.register(cookie, { secret: process.env['COOKIE_SECRET'] });
  },
  {
    name: 'cookie',
  },
);
