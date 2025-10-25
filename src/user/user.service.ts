import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';

@Injectable()
export class UserService {
  get() {
    return { name: 'Ajeet Yadav', email: 'ajeetyadav@gmail.com' };
  }

  // create(req: Request) {
  //   return req.body;
  // }

  create(body: CreateUserDto) {
    return body;
  }

  getUserById(userId: number) {
    return { userId };
  }

  // update(req: Request, param: { userId: number }) {
  //   return {
  //     userId: param.userId,
  //     body: req.body,
  //   };
  // }

  update(body: UpdateUserDto, param: { userId: number }) {
    return {
      userId: param.userId,
      body: body,
    };
  }

  deleteUser(userId: number) {
    return { deletedUserId: userId };
  }
}
