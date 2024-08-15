import {Injectable, UnauthorizedException} from '@nestjs/common';
import {SignupDto} from "./dto/signup.dto";
import {UsersService} from "../users/users.service";
import {PasswordHasherService} from "./password-hasher/password-hasher.service";
import {LoginDto} from "./dto/login.dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly passwordHasherService: PasswordHasherService,
        private readonly jwtService: JwtService,
    ) {
    }

    async signUp(singUpDto: SignupDto): Promise<any> {
        let user = this.usersService.findOne({
            email: singUpDto.email
        });
        if (user) {
            throw new UnauthorizedException(`Email ${singUpDto.email} is already taken, use another one.`);
        }
        singUpDto.password = await this.passwordHasherService.generateHash(singUpDto.password);
        // username is the same as the email for this version
        singUpDto.username = singUpDto.email;
        return this.usersService.registerUser(singUpDto);
    }


    async login(loginDto: LoginDto): Promise<any> {

        // check user in database
        let user = await this.usersService.findOne({
            email: loginDto.email,
        });
        if (!user) {
            throw new UnauthorizedException(`Invalid Login`);
        }

        // check user password
        let isValidPassword = await this.passwordHasherService.comparePasswordHash(loginDto.password, user.password);
        if (!isValidPassword) {
            throw new UnauthorizedException(`Invalid Login`);
        }

        // generate jwt token
        const payload = { sub: user.id, username: user.username };
        return {
          access_token: await this.jwtService.signAsync(payload),
        }
        // return user;
    }

}
