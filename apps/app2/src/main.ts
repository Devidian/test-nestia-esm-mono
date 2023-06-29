import { NestFactory } from '@nestjs/core';
import { App2Module } from './app2.module.js';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();
const logger = new Logger('App2.bootstrap', {});

async function bootstrap() {
  const app = await NestFactory.create(App2Module, { logger });

  const port = Number(configService.get<string>('APP_PORT', '80'));
  await app.listen(port);
}

process.on('unhandledRejection', function (error: Error) {
  error = error instanceof Error ? error : new Error('UnhandledRejection');
  error.message = '(UnhandledRejection) ' + error.message;
  logger.error(error);
});

process.on('uncaughtException', function (error) {
  error = error instanceof Error ? error : new Error('UnhandledException');
  error.message = '(UnhandledException) ' + error.message;
  logger.error(error);
});

bootstrap().catch((error) => {
  logger.error(error);
});
