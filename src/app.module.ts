import { LogoutModule } from './logout/logout.module';
import { ProfileModule } from './profile/profile.module';
import { MeetModule } from './meet/meet.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [LogoutModule, ProfileModule, MeetModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
