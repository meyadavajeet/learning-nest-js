import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);
    if (user) {
      if (user.password === loginDto.password) {
        return user;
      }
      return 'password does not match';
    }
    return 'unauthenticated';
  }
}
