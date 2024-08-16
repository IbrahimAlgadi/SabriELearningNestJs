import {Resolver} from '@nestjs/graphql';
import {QueryService, InjectQueryService, Filter} from '@nestjs-query/core';
import {
    CRUDResolver,
    // CreateOneInputType,
    // CreateResolver,
    // DeleteResolver,
    // MutationArgsType,
    // ReadResolver,
    // UpdateResolver
} from '@nestjs-query/query-graphql';
import {UserDTO} from "./graphql-dto/user.dto";
import {UserEntity} from "./entity/user.entity";
import {CreateUserInputDTO} from "./graphql-dto/create-user.input.dto";
import {UpdateUserInputDTO} from "./graphql-dto/update-user.input.dto";

@Resolver(() => UserDTO)
export class UsersResolver extends CRUDResolver(UserDTO, {
    create: {many: {disabled: true}},
    update: {many: {disabled: true}},
    delete: {many: {disabled: true}},
    CreateDTOClass: CreateUserInputDTO,
    UpdateDTOClass: UpdateUserInputDTO,
}) {
    constructor(
        @InjectQueryService(UserEntity) readonly service: QueryService<UserEntity>
    ) {
        super(service);
    }

    // createOne(input: MutationArgsType<CreateOneInputType<DeepPartial<UserDTO>>>, authorizeFilter?: Filter<UserDTO>): Promise<UserDTO> {
    //     return super.createOne(input, authorizeFilter)
    // }
}

// @Resolver(() => UserDTO)
// export class CreateUsersResolver extends CreateResolver(UserDTO) {
//     constructor(
//         @InjectQueryService(UserEntity) readonly service: QueryService<UserEntity>
//     ) {
//         super(service);
//     }
//
//     // createOne(input: MutationArgsType<CreateOneInputType<DeepPartial<UserDTO>>>, authorizeFilter?: Filter<UserDTO>): Promise<UserDTO> {
//     //     return super.createOne(input, authorizeFilter)
//     // }
// }
//
//
// @Resolver(() => UserDTO)
// export class ReadUsersResolver extends ReadResolver(UserDTO) {
//     constructor(
//         @InjectQueryService(UserEntity) readonly service: QueryService<UserEntity>
//     ) {
//         super(service);
//     }
// }
//
//
// @Resolver(() => UserDTO)
// export class UpdateUsersResolver extends UpdateResolver(UserDTO) {
//     constructor(
//         @InjectQueryService(UserEntity) readonly service: QueryService<UserEntity>
//     ) {
//         super(service);
//     }
// }
//
//
// @Resolver(() => UserDTO)
// export class DeleteUsersResolver extends DeleteResolver(UserDTO) {
//     constructor(
//         @InjectQueryService(UserEntity) readonly service: QueryService<UserEntity>
//     ) {
//         super(service);
//     }
// }
