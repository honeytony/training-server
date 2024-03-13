/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { MeetDTO } from './dto/meet.dto';
import { LoginUserDto } from 'src/user/dto/loginUser.dto';

const MEET_HASH = 'Co72ZvZK4wHbdMDZaumL_zoWmaZX_cP';

@Injectable()
export class MeetService {
  create(dto: MeetDTO) {
    if (dto.email === 'user1@user.ru' || dto.password === 'Password*') {
      return {
        data: {
          meet: {
            hash: MEET_HASH,
            user: {
              id: 23,
              leaderHash: 'uP2tYXXAFB9Tyau_Op2DEmNqpJVIl1km',
            },
          },
        },
      };
    }
  }

  get(meetHash: string) {
    if (meetHash === MEET_HASH) {
      return {
        meet: {
          title: 'title',
          description: 'description',
          dates: ['02-03-2024'],
          start: '09:00',
          end: '18:00',
          interval: 60,
          block: 0,
          users: {
            'leader@gmail.com': {
              id: 5,
              availables: [[1, 1, 1, 1, 1, 0, 0, 0, 0]],
            },
            'participant@gmail.com': {
              id: 6,
              availables: [[0, 0, 0, 1, 1, 0, 0, 0, 0]],
            },
          },
          leader: {
            id: 5,
            login: 'leader@gmail.com',
          },
          img: 'background.jpg',
          files: [],
        },
      };
    } else {
      return {
        error: {
          code: 404,
          message: 'Не найдено',
        },
      };
    }
  }

  login(meetHash: string, dto: LoginUserDto) {
    if (
      meetHash === MEET_HASH &&
      dto.email === 'user@user.ru' &&
      dto.password === 'Password1'
    ) {
      return {
        data: {
          user: {
            id: 25,
            token: 'sdwwkeqOWewnsdsawdsawWobnf',
          },
        },
      };
    } else if (meetHash != MEET_HASH) {
      return {
        error: {
          code: 404,
          message: 'Не найдено',
        },
      };
    }
    return;
  }
}
