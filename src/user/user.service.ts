import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // get() {
  //   return { name: 'Ajeet Yadav', email: 'ajeetyadav@gmail.com' };
  // }

  // // create(req: Request) {
  // //   return req.body;
  // // }

  // create(body: CreateUserDto) {
  //   return body;
  // }

  // getUserById(userId: number) {
  //   return { userId };
  // }

  // // update(req: Request, param: { userId: number }) {
  // //   return {
  // //     userId: param.userId,
  // //     body: req.body,
  // //   };
  // // }

  // update(body: UpdateUserDto, userId: number) {
  //   return {
  //     userId: userId,
  //     body: body,
  //   };
  // }

  // deleteUser(userId: number) {
  //   return { deletedUserId: userId };
  // }

  // CRUD USING THE REPOSITORY PATTERN
  get(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(createUserDto: CreateUserDto): Promise<any> {
    return this.userRepository.save(createUserDto);
  }

  getUserById(userId: number): Promise<any> {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  update(updateUserDto: UpdateUserDto, userId: number): Promise<any> {
    return this.userRepository.update(userId, updateUserDto);
  }

  deleteUser(userId: number) {
    return this.userRepository.delete(userId);
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
}
