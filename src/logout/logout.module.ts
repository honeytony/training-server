import { LogoutController } from './logout.controller';
import { LogoutService } from './logout.service';
/*
https://docs.nestjs.com/modules
*/

import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthMiddleware } from 'src/middleware/auth.middleware';

@Module({
  imports: [],
  controllers: [LogoutController],
  providers: [LogoutService],
})
export class LogoutModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
