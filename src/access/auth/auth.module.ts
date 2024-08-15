import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../users/entity/user.entity";
import {UsersService} from "../users/users.service";
import {PasswordHasherService} from "./password-hasher/password-hasher.service";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../../common/constants";
import {PassportModule} from "@nestjs/passport";
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity
        ]),
        PassportModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '60s'},
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, UsersService, PasswordHasherService, JwtStrategyService],
    exports: [AuthService]
})
export class AuthModule {
}
