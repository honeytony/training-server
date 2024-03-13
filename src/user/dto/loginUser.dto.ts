import { PartialType } from '@nestjs/mapped-types';
import { RegisterUserDto } from './registerUser.dto';

export class LoginUserDto extends PartialType(RegisterUserDto) {}
