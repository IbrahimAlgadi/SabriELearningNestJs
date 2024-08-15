import { Module } from '@nestjs/common';
import { PermissionsModule } from '../permissions/permissions.module';
import { UserLocationsModule } from '../user_locations/user_locations.module';
import { GroupsModule } from '../groups/groups.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./entity/user.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([
          UserEntity
      ]),
      PermissionsModule,
      UserLocationsModule,
      GroupsModule
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
