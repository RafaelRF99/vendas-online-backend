import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { IUserEntity } from 'src/interface/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(IUserEntity)
    private readonly userRepository: Repository<IUserEntity>,
  ) {}

  async createUserService(createUserDto: CreateUserDto): Promise<IUserEntity> {
    const saltOrRounds = 10;
    const passwordHash = await hash(createUserDto.password, saltOrRounds);

    return this.userRepository.save({
      ...createUserDto,
      password: passwordHash,
    });
  }

  async GetAlUsers(): Promise<IUserEntity[]> {
    return this.userRepository.find();
  }
}
