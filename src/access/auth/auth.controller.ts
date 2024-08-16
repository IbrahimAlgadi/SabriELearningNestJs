import {Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request} from '@nestjs/common';
import {SignupDto} from "./dto/signup.dto";
import {AuthService} from "./auth.service";
import {LoginDto} from "./dto/login.dto";
import {JwtAuthGuard} from "../../common/guard/jwt-auth.guard";
import {ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags} from "@nestjs/swagger";


@ApiTags('auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {
    }

    @ApiCreatedResponse({ description: 'User created successfully.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiBody({
      description: 'Sign Up user',
      type: SignupDto,
    })
    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    async signUp(@Body() signupDto: SignupDto): Promise<any> {
        return this.authService.signUp(signupDto);
    }

    @ApiOkResponse({ description: 'User logged in successfully.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiBody({
      description: 'Login user',
      type: LoginDto,
    })
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
