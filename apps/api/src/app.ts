import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload';
import { FastifyPluginAsync, FastifyServerOptions } from 'fastify';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export interface AppOptions extends FastifyServerOptions, Partial<AutoloadPluginOptions> {}

const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify
    .register(AutoLoad, {
      dir: join(__dirname, 'plugins'),
      options: Object.assign({ prefix: '/plugins' }, opts),
      dirNameRoutePrefix: false,
      forceESM: true,
    })
    .ready((err) => {
      if (err) throw err;
      fastify.log.info('Plugins loaded');
    });

  fastify
    .register(AutoLoad, {
      dir: join(__dirname, 'routes'),
      options: Object.assign({ prefix: '/api' }, opts),
      routeParams: true,
      autoHooks: true,
      cascadeHooks: true,
      forceESM: true,
    })
    .ready((err) => {
      if (err) throw err;
      fastify.log.info('Routes loaded');
    });
};

export default app;
export { app, options };
