import {IsEmail, IsNotEmpty, IsString, IsStrongPassword, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class LoginDto {

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @MaxLength(255)
    @ApiProperty({
        description: 'The age of a cat',
        maximum: 255,
    })
    email: string;

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    @ApiProperty()
    password: string;

}