import Fastify, { FastifyErrorCodes, FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

async function setErrorHandler(fastify: FastifyInstance) {
  fastify.setErrorHandler(function (error, request, reply) {
    fastify.log.error(error);
    reply
      .status(error?.statusCode ?? 500)
      .send({ status: error.statusCode, code: error.code, message: error.message });
  });
}
export default fp(setErrorHandler, {
  name: 'set-error-handler',
});
