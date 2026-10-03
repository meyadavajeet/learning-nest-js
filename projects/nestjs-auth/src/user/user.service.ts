import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/registerUserDto';

@Injectable()
export class UserService {
  createUser(registerUserDto: RegisterUserDto) {
    console.log('User created:', registerUserDto);
    return 'User created';
  }
}
