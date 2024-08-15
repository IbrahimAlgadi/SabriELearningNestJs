import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {jwtConstants} from "../../../common/constants";
import {UsersService} from "../../users/users.service";

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy){

    constructor(
        private readonly usersService: UsersService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // jsonWebTokenOptions: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret
        });
    }

    async validate(payload: any) {
        console.log(payload);
        let user = this.usersService.findOne({
            id: payload.id,
            email: payload.email
        })
        if (!user) {
            throw new UnauthorizedException("Un Authorized")
        }
        return user;
    }

}
