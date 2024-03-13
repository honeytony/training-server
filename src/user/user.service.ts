import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/loginUser.dto';
import { TOKEN, EUser } from 'src/constants/constants';

@Injectable()
export class UserService {
  login(dto: LoginUserDto) {
    if (dto.email === EUser.email && dto.password === EUser.password) {
      return {
        data: {
          token: TOKEN,
        },
      };
    } else {
      return {
        error: {
          code: 401,
          message: 'Unauthorized',
        },
      };
    }
  }
}
