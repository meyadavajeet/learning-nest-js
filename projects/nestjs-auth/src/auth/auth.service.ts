import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterUserDto } from '../user/dto/registerUserDto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  register(registerUserDto: RegisterUserDto) {
    return this.userService.createUser(registerUserDto);
  }
}
