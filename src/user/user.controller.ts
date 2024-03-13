import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDto } from './dto/loginUser.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  login(@Body() dto: LoginUserDto) {
    console.log('DTO', dto);

    return this.userService.login(dto);
  }
}
