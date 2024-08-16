import {Module} from '@nestjs/common';
import {PermissionsModule} from '../permissions/permissions.module';
import {UserLocationsModule} from '../user_locations/user_locations.module';
import {GroupsModule} from '../groups/groups.module';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./entity/user.entity";
import {NestjsQueryGraphQLModule} from "@nestjs-query/query-graphql";
import {NestjsQueryTypeOrmModule} from "@nestjs-query/query-typeorm";
import {UserDTO} from "./graphql-dto/user.dto";
import {UsersResolver} from "./users.resolver";
// import {ReadUsersResolver, CreateUsersResolver, UpdateUsersResolver, DeleteUsersResolver} from './users.resolver';
// import {CreateUserInputDTO} from "./graphql-dto/create-user.dto";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity
        ]),
        NestjsQueryGraphQLModule.forFeature({
            imports: [
                NestjsQueryTypeOrmModule.forFeature([UserEntity])
            ],
            dtos: [{ DTOClass: UserDTO }],
            // resolvers: [{CreateDTOClass: CreateUserInputDTO, DTOClass: UserDTO}],
        }),
        PermissionsModule,
        UserLocationsModule,
        GroupsModule
    ],
    controllers: [UsersController],
    providers: [
        UsersService,
        UsersResolver,
    ]
})
export class UsersModule {
}
