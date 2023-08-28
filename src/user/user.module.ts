import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IUserEntity } from 'src/interface/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IUserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
