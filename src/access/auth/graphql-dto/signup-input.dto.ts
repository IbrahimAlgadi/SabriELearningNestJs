import {IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword, MaxLength} from "class-validator";
import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class SignupInputDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    @Field()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    @Field()
    lastName: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    @Field()
    username: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @MaxLength(255)
    @Field()
    email: string;

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    @Field()
    password: string;
}