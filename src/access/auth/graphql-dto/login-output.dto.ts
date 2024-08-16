import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class LoginOutputDto {
    @Field()
    accessToken: string
}