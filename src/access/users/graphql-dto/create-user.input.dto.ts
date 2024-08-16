import {CreateOneInputType, FilterableField, IDField} from '@nestjs-query/query-graphql';
import {ObjectType, GraphQLISODateTime, Field, ID, InputType} from '@nestjs/graphql';


@InputType('CreateUserInput')
export class CreateUserInputDTO {
  // @IDField(() => ID)
  // id!: number;

  @FilterableField()
  firstName!: string;

  @FilterableField()
  lastName!: string;

  @FilterableField()
  email!: string;

  @FilterableField()
  password!: string;

  // @Field()
  // fullName!: string;

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
  //
  // @Field(() => GraphQLISODateTime)
  // lastLogin!: Date;

  // @Field(() => GraphQLISODateTime)
  // updated!: Date;
}

// @InputType()
// export class CreateOneUserInput extends CreateOneInputType('user', CreateUserInputDTO) {}