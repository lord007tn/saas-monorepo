import ws, { WebsocketPluginOptions } from '@fastify/websocket';
import fp from 'fastify-plugin';

/**
 * WebSocket support for Fastify. Built upon ws@8.
 *
 * @see https://github.com/fastify/fastify-websocket
 */
export default fp<WebsocketPluginOptions>(
  async (fastify) => {
    fastify.register(ws);
  },
  {
    name: 'websocket',
  },
);
