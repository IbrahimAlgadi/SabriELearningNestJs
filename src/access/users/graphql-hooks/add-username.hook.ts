import {Injectable} from "@nestjs/common";
import {BeforeCreateOneHook, CreateOneInputType} from "@nestjs-query/query-graphql";
import {GqlContext} from "../../../common/graphql/types/gql-context.type";

interface privateUserFields {
  email: string;
  username: string;
}

@Injectable()
export class BeforeCreateUserHook<T extends privateUserFields> implements BeforeCreateOneHook<T, GqlContext> {
  constructor() {}

  async run(instance: CreateOneInputType<T>, context: GqlContext): Promise<CreateOneInputType<T>> {
    // const createdBy = await this.authService.getUserEmail(context.userId);
    instance.input.username = instance.input.email;
    console.log("Before save user: ", instance)
    return instance;
  }
}