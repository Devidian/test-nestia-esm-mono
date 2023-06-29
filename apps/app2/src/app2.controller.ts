import { TypedBody, TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { App2Service } from './app2.service.js';

interface ComplexInput {
  a: string;
  b: number;
  c: boolean;
}

interface ComplexOutput {
  a: string;
  b: number;
  c: boolean;
}

@Controller()
export class App2Controller {
  constructor(private readonly app2Service: App2Service) {}

  @TypedRoute.Get()
  public getHello(): string {
    return this.app2Service.getHello();
  }

  @TypedRoute.Post('x')
  public x(@TypedBody() body: ComplexInput): ComplexOutput {
    return body;
  }
}
