/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  get() {
    return {
      user: {
        id: 2,
        email: 'leader@email.com',
        identifier: '-ewqQw',
        meets_leader: [
          {
            id: 1,
            title: 'title',
            hash: 'xxxxx',
            block: 0,
          },
        ],
        meets_partic: [
          {
            id: 2,
            title: 'title',
            hash: 'xxxxx',
            block: 0,
          },
        ],
      },
    };
  }
}
