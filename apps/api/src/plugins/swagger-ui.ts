import statics from '@fastify/static';
import swaggerUI, { FastifySwaggerUiOptions } from '@fastify/swagger-ui';
import fp from 'fastify-plugin';
import { fileURLToPath } from 'node:url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/**
 * A Fastify plugin for serving Swagger UI.
 *
 * @see https://github.com/fastify/fastify-swagger-ui
 */
export default fp(
  async (fastify) => {
    fastify.register<FastifySwaggerUiOptions>(swaggerUI, {
      routePrefix: '/api/docs',
      uiConfig: {
        docExpansion: 'list',
        deepLinking: false,
      },
    });
    fastify.register(statics, {
      root: path.join(__dirname, '../../node_modules/@fastify/swagger-ui/static'),
      prefix: '/docs',
    });
  },
  {
    name: 'swagger-ui',
    dependencies: ['swagger'],
  },
);
