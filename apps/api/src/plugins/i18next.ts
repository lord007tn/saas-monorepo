import fp from 'fastify-plugin';
import i18next from 'i18next';
import i18nextBackend, { FsBackendOptions } from 'i18next-fs-backend';
import i18nextMiddleware from 'i18next-http-middleware';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
/**
 * enables translation on server.
 */
export default fp(
  async (fastify) => {
    i18next
      .use(i18nextBackend)
      .use(i18nextMiddleware.LanguageDetector)
      .init<FsBackendOptions>({
        supportedLngs: ['ar', 'en', 'fr'],
        preload: ['ar', 'en', 'fr'],
        fallbackLng: 'en',
        // ns: ["translation"],
        // defaultNS: ["translation"],
        backend: {
          loadPath: join(__dirname, '../translation/{{lng}}/{{ns}}.json'),
          // path to post missing resources
          addPath: join(__dirname, '../translation/{{lng}}/{{ns}}.missing.json'),
        },
      });
    // @ts-ignore
    fastify.register(i18nextMiddleware.plugin, { i18next: i18next });
    fastify.decorate('i18n', i18next);
  },
  {
    name: 'i18next',
  },
);
