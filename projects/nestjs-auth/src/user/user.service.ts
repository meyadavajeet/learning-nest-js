import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/registerUserDto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entities';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  async createUser(registerUserDto: RegisterUserDto) {
    try {
      return await this.userModel.create({
        ...registerUserDto,
      });
    } catch (error: unknown) {
      const err = error as { code?: number };
      const DUPLICATE_KEY_ERROR_CODE = 11000;
      if (err.code === DUPLICATE_KEY_ERROR_CODE) {
        throw new ConflictException('User with this email already exists');
      }
      throw error;
    }
  }
}
