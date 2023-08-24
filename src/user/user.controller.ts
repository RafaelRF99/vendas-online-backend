import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { IUser } from 'src/interface/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<IUser> {
    return this.userService.createUserService(createUser);
  }

  @Get()
  async GellAllUsers(): Promise<IUser[]> {
    return this.userService.GetAlUsers();
  }
}
