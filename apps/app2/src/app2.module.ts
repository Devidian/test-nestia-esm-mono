import { Module } from '@nestjs/common';
import { App2Controller } from './app2.controller.js';
import { App2Service } from './app2.service.js';

@Module({
  imports: [],
  controllers: [App2Controller],
  providers: [App2Service],
})
export class App2Module {}
