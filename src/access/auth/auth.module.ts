import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../users/entity/user.entity";
import {UsersService} from "../users/users.service";
import {PasswordHasherService} from "./password-hasher/password-hasher.service";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../../common/constants";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity
        ]),
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '60s'},
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, UsersService, PasswordHasherService]
})
export class AuthModule {
}
