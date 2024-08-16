import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
    Request,
    UseInterceptors,
    ClassSerializerInterceptor
} from '@nestjs/common';
import {SignupDto} from "./dto/signup.dto";
import {AuthService} from "./auth.service";
import {LoginDto} from "./dto/login.dto";
import {JwtAuthGuard} from "../../common/guard/jwt-auth.guard";
import {ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags} from "@nestjs/swagger";
import {SignupResponse} from "./interface/signup-response.interface";
import {LoginResponse} from "./interface/login-response.interface";


@ApiTags('auth')
@ApiBearerAuth()
@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
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
    async signUp(@Body() signupDto: SignupDto): Promise<SignupResponse> {
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
    async login(@Body() loginDto: LoginDto): Promise<LoginResponse> {
        return this.authService.login(loginDto);
    }

    // @UseGuards(AuthGuard)
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

}
