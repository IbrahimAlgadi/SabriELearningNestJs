import {IsEmail, IsNotEmpty, IsString, IsStrongPassword, MaxLength} from "class-validator";


export class LoginDto {

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