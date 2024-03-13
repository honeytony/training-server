import { LogoutService } from './logout.service';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('logout')
export class LogoutController {
  constructor(private readonly logoutService: LogoutService) {}

  @Get()
  @HttpCode(HttpStatus.NO_CONTENT)
  logout() {
    return this.logoutService.logout();
  }
}
