import { FastifySwaggerOptions } from '@fastify/swagger';
import swagger from '@fastify/swagger';
import fp from 'fastify-plugin';

/**
 * A Fastify plugin for serving Swagger (OpenAPI v2) or OpenAPI v3 schemas
 *
 * @see https://github.com/fastify/fastify-swagger
 */
export default fp<FastifySwaggerOptions>(
  async (fastify) => {
    let url = '';
    switch (process.env['NODE_ENV']) {
      case 'development':
        url = 'http://localhost:8000';
        break;
      case 'staging':
        url = 'http://localhost:8000';
        break;
      case 'production':
        url = 'http://localhost:8000';
        break;
      default:
        url = 'http://localhost:8000';
        break;
    }
    fastify.register(swagger, {
      openapi: {
        info: {
          title: 'swagger',
          description: 'testing the fastify swagger api',
          version: '1.0.0',
        },
        servers: [
          {
            url: url,
          },
        ],
        components: {
          securitySchemes: {
            http: {
              type: 'http',
              scheme: 'Bearer',
              bearerFormat: 'jwt',
            },
          },
        },
      },
      hideUntagged: true,
    });
  },
  {
    name: 'swagger',
  },
);
