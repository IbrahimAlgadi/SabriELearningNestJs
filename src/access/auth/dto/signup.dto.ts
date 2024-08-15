import {IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword, MaxLength} from "class-validator";


export class SignupDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    firstName: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    lastName: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    username: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @MaxLength(255)
    email: string;

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    password: string;
}