import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class SignupOutputDto {
    @Field()
    message: string;

    @Field()
    email: string;
}