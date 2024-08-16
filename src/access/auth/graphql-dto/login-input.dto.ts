import {Field, InputType, Int, ObjectType} from '@nestjs/graphql';
import {IsEmail, IsNotEmpty, IsString, IsStrongPassword, MaxLength} from "class-validator";

@InputType()
export class LoginInputDto {

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