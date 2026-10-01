import type { Request } from 'express';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.get();
    // return { name: 'Ajeet', email: 'aj@gmail.com' };
  }

  @Post()
  // store(@Req() req: Request) {
  //   return this.userService.create(req);
  //   // return req.body;
  // }
  store(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @Patch('/:userId')
  // update(@Req() req: Request, @Param() param: { userId: number }) {
  //   return this.userService.update(req, param);
  // }
  update(
    @Body() body: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(body, userId);
  }

  @Get('/:userId')
  // getUser(@Param() params: { userId: number }) {
  //   return this.userService.getUserById(params.userId);
  // }
  // clearner version
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getUserById(userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.deleteUser(userId);
  }
}
