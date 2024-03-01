import urlData, { fastifyUrlData } from '@fastify/url-data';
import fp from 'fastify-plugin';

/**
 * A plugin for Fastify that adds support for getting raw URL information from the request.
 *
 * @see https://github.com/fastify/url-data
 */
export default fp<typeof fastifyUrlData>(
  async (fastify) => {
    fastify.register(urlData);
  },
  {
    name: 'url-data',
  },
);
