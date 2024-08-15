import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../users/entity/user.entity";
import {UsersService} from "../users/users.service";
import {PasswordHasherService} from "./password-hasher/password-hasher.service";

@Module({
  imports: [TypeOrmModule.forFeature([
      UserEntity
  ])],
  controllers: [AuthController],
  providers: [AuthService, UsersService, PasswordHasherService]
})
export class AuthModule {}
