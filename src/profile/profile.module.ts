import { AuthMiddleware } from 'src/middleware/auth.middleware';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
/*
https://docs.nestjs.com/modules
*/

import { MiddlewareConsumer, Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ProfileController);
  }
}
