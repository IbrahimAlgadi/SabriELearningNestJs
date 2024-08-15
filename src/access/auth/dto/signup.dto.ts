import {IsEmail, IsString, IsStrongPassword, MaxLength} from "class-validator";


export class SignupDto {
    @IsString()
    @MaxLength(255)
    firstName: string;

    @IsString()
    @MaxLength(255)
    lastName: string;

    @IsString()
    @MaxLength(255)
    username: string;

    @IsString()
    @IsEmail()
    @MaxLength(255)
    email: string;

    @IsString()
    @IsStrongPassword()
    password: string;
}