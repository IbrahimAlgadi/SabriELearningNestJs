import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {SignupDto} from "./dto/signup.dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    async signUp(@Body() signupDto: SignupDto): Promise<any> {
        return this.authService.signUp(signupDto);
    }

}
