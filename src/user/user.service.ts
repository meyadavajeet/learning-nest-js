import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  get() {
    return { name: 'Ajeet Yadav', email: 'ajeetyadav@gmail.com' };
  }

  create(req: Request) {
    return req.body;
  }

  getUserById(userId: number) {
    return { userId };
  }

  update(req: Request, param: { userId: number }) {
    return {
      userId: param.userId,
      body: req.body,
    };
  }

  deleteUser(userId: number) {
    return { deletedUserId: userId };
  }
}
