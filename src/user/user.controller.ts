import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { IUserEntity } from 'src/interface/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<IUserEntity> {
    return this.userService.createUserService(createUser);
  }

  @Get()
  async GellAllUsers(): Promise<IUserEntity[]> {
    return this.userService.GetAlUsers();
  }
}
