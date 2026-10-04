import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from '../user/dto/registerUserDto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    const registeredUser = this.authService.registerUser(registerUserDto);
    return registeredUser;
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    const loggedInUser = this.authService.loginUser(loginUserDto);
    return loggedInUser;
  }
}
