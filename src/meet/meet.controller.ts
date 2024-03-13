import { MeetService } from './meet.service';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MeetDTO } from './dto/meet.dto';
import { LoginUserDto } from 'src/user/dto/loginUser.dto';

@Controller('/meet')
export class MeetController {
  constructor(private readonly meetService: MeetService) {}
  @Post()
  create(@Body() dto: MeetDTO) {
    return this.meetService.create(dto);
  }

  @Get(':meetHash')
  getMeet(@Param('meetHash') meetHash: string) {
    return this.meetService.get(meetHash);
  }

  @Get('/:meetHash/login')
  login(@Param('meetHash') meetHash: string, @Body() dto: LoginUserDto) {
    return this.meetService.login(meetHash, dto);
  }
}
