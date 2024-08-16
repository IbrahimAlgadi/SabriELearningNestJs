import {BeforeCreateOne, FilterableField, IDField} from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, ID } from '@nestjs/graphql';
import {BeforeCreateUserHook} from "../graphql-hooks/add-username.hook";

@ObjectType('User')
@BeforeCreateOne(BeforeCreateUserHook)
export class UserDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  firstName!: string;

  @FilterableField()
  lastName!: string;

  @FilterableField()
  email!: string;

  // @FilterableField()
  // password!: string;
  //
  // // @Field()
  // // fullName!: string;
  //
  // @Field()
  // isStaff!: boolean;
  //
  // @Field()
  // isSuperuser!: boolean;
  //
  // @Field()
  // isActive!: boolean;
  //
  // @Field(() => GraphQLISODateTime)
  // dateJoined!: Date;

  // @Field(() => GraphQLISODateTime)
  // lastLogin!: Date;

  // @Field(() => GraphQLISODateTime)
  // updated!: Date;
}