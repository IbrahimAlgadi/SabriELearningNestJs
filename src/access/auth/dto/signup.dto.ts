import {IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export class SignupDto {

    @ApiProperty({
        description: 'First Name',
        maximum: 255,
        required: true
    })
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    firstName: string;

    @ApiProperty({
        description: 'Last Name',
        maximum: 255,
        required: true
    })
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    lastName: string;

    @ApiProperty({
        description: 'Username Name',
        maximum: 255,
    })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    username: string;

    @ApiProperty({
        description: 'Email Name',
        maximum: 255,
        required: true
    })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @MaxLength(255)
    email: string;

    @ApiProperty({
        description: 'Password',
        maximum: 255,
        required: true
    })
    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    password: string;
}