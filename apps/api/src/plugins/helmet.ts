import helmet, { FastifyHelmetOptions } from '@fastify/helmet';
import fp from 'fastify-plugin';

/**
 * Important security headers for Fastify. It is a tiny wrapper around helmet.
 *
 * @see https://github.com/fastify/fastify-helmet
 */
export default fp(
  async (fastify) => {
    await fastify.register(helmet, {
      //@ts-ignore
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // Unsafe-eval is required for vue3 / vue-i18n / app extensions
          scriptSrc: ["'self'", "'unsafe-eval'"],

          // Even though this is recommended to have enabled, it breaks most local
          // installations. Making this opt-in rather than opt-out is a little more
          // friendly. Ref #10806
          upgradeInsecureRequests: null,

          // These are required for MapLibre
          workerSrc: ["'self'", 'blob:'],
          childSrc: ["'self'", 'blob:'],
          imgSrc: ["'self'", 'data:', 'blob:'],
          mediaSrc: ["'self'"],
          connectSrc: ["'self'", 'https://*'],
        },
      },
      xContentTypeOptions: false,
    });
  },
  {
    name: 'helmet',
    dependencies: ['swagger', 'swagger-ui'],
  },
);
