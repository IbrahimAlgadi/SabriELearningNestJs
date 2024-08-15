import { Module } from '@nestjs/common';
import { PermissionsModule } from './permissions/permissions.module';
import { UserLocationsModule } from './user_locations/user_locations.module';

@Module({
  imports: [PermissionsModule, UserLocationsModule]
})
export class UsersModule {}
