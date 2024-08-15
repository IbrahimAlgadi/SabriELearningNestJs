import {Injectable, UnauthorizedException} from '@nestjs/common';
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
        let user = this.usersService.findOne({
            username: singUpDto.username
        })
        if (user) {
            throw new UnauthorizedException(`Email ${singUpDto.username} is already taken, use another one.`)
        }
        singUpDto.password = await this.passwordHasherService.generateHash(singUpDto.password);
        return this.usersService.registerUser(singUpDto);
    }

}
