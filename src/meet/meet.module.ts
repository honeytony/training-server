import { MeetController } from './meet.controller';
import { MeetService } from './meet.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [MeetController],
  providers: [MeetService],
})
export class MeetModule {}
