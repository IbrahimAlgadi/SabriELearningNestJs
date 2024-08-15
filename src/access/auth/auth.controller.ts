import {Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request} from '@nestjs/common';
import {SignupDto} from "./dto/signup.dto";
import {AuthService} from "./auth.service";
import {LoginDto} from "./dto/login.dto";
// import {AuthGuard} from "@nestjs/passport";
import {JwtAuthGuard} from "./guard/jwt-auth.guard";
// import {AuthGuard} from "./guard/auth.guard";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    async signUp(@Body() signupDto: SignupDto): Promise<any> {
        return this.authService.signUp(signupDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<any> {
        return this.authService.login(loginDto);
    }

    // @UseGuards(AuthGuard)
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

}
