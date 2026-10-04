import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterUserDto } from '../user/dto/registerUserDto';
import * as bcrypt from 'bcrypt';
import { Role } from './types/user.types';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(registerUserDto: RegisterUserDto) {
    /**
     * Logic for register user
     * 1. hash the password
     * 2. Check if the user already exists using unique key of email filed
     * 3. If user exists, throw an error
     * 4. If user does not exist, create a new user in the database
     * 5. Return the newly created user
     * 6. If any error occurs, throw an error
     * 7. Create JWT token for the user and return it along with the user object
     * 7. If everything is successful, return the newly created user
     */
    const hashedPassword = await bcrypt.hash(
      registerUserDto.password,
      process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS) : 10,
    );
    const user = await this.userService.createUser({
      ...registerUserDto,
      password: hashedPassword,
    });
    // create JWT token for the user and return it along with the user object
    const payload = { sub: user._id.toString(), role: Role.ADMIN };

    const token: string = await this.jwtService.signAsync(payload);
    return {
      user: {
        id: user._id.toString(),
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        role: user.role,
      },
      accessToken: token,
    };
  }

  async loginUser(loginUserDto: LoginUserDto) {
    /**
     * Logic for login user
     * 1. Check if the user exists using unique key of email filed
     * 2. If user does not exist, throw an error
     * 3. If user exists, compare the password with the hashed password in the database
     * 4. If password does not match, throw an error
     * 5. If password matches, create JWT token for the user and return it along with the user object
     * 6. If everything is successful, return the user object along with the JWT token
     */

    const user = await this.userService.findUserByEmail(loginUserDto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const isPasswordValid = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const payload = { sub: user._id.toString(), role: user.role };
    const token: string = await this.jwtService.signAsync(payload);
    return {
      user: {
        id: user._id.toString(),
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        role: user.role,
      },
      accessToken: token,
    };
  }
}
