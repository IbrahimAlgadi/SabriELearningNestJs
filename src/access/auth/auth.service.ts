import { Injectable } from '@nestjs/common';
import {SignupDto} from "./dto/signup.dto";
import {UsersService} from "../users/users.service";
import {PasswordHasherService} from "./password-hasher/password-hasher.service";

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly passwordHasherService: PasswordHasherService,
    ) {
    }

    async signUp(singUpDto: SignupDto): Promise<any> {
        singUpDto.password = await this.passwordHasherService.generateHash(singUpDto.password);
        return this.usersService.registerUser(singUpDto);
    }

}
