import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { IUser } from 'src/interface/user.interface';

@Injectable()
export class UserService {
  private users: IUser[] = [];

  async createUserService(createUserDto: CreateUserDto): Promise<IUser> {
    const saltOrRounds = 10;
    const passwordHash = await hash(createUserDto.password, saltOrRounds);

    const userCache = {
      ...createUserDto,
      password: passwordHash,
      id: this.users.length + 1,
    };

    this.users.push(userCache);

    return userCache;
  }

  async GetAlUsers(): Promise<IUser[]> {
    return this.users;
  }
}
