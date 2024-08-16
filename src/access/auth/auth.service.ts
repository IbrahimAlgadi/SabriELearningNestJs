import {Injectable, UnauthorizedException} from '@nestjs/common';
import {SignupDto} from "./dto/signup.dto";
import {UsersService} from "../users/users.service";
import {PasswordHasherService} from "./password-hasher/password-hasher.service";
import {LoginDto} from "./dto/login.dto";
import {JwtService} from "@nestjs/jwt";
import {LoginResponse} from "./interface/login-response.interface";
import {SignupResponse} from "./interface/signup-response.interface";

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly passwordHasherService: PasswordHasherService,
        private readonly jwtService: JwtService,
    ) {
    }

    async signUp(singUpDto: SignupDto): Promise<SignupResponse> {
        let existingUser = await this.usersService.findOne({
            email: singUpDto.email
        });
        if (existingUser) {
            throw new UnauthorizedException(`Email ${existingUser.email} is already taken, use another one.`);
        }
        singUpDto.password = await this.passwordHasherService.generateHash(singUpDto.password);
        // username is the same as the email for this version
        singUpDto.username = singUpDto.email;
        let user = await this.usersService.registerUser(singUpDto);
        return {
            email: user.email,
            message: "Sign up was successful"
        };
    }


    async login(loginDto: LoginDto): Promise<LoginResponse> {

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

        // update last login for the user
        user = await this.usersService.updateLastLogin(user);

        // generate jwt token
        const payload = { id: user.id, email: user.email };
        return {
          accessToken: await this.jwtService.signAsync(payload),
        }
        // return user;
    }

}
