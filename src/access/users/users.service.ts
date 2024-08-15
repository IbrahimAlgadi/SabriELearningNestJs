import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./entity/user.entity";
import {FindOptionsWhere, Repository} from "typeorm";
import {SignupDto} from "../auth/dto/signup.dto";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>
    ) {
    }

    async registerUser(singUpDto: SignupDto): Promise<UserEntity> {
        let userEntity = new UserEntity();
        userEntity.firstName = singUpDto.firstName;
        userEntity.lastName = singUpDto.lastName;
        userEntity.email = singUpDto.email;
        userEntity.username = singUpDto.email;
        userEntity.password = singUpDto.password;
        return this.usersRepository.save(userEntity);
    }

    async findOne(whereOptions: FindOptionsWhere<UserEntity>): Promise<UserEntity> {
        return this.usersRepository.findOne({
            where: whereOptions
        })
    }

}
