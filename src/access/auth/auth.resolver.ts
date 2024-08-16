import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {SignupOutputDto} from "./graphql-dto/signup-output.dto";
import {SignupInputDto} from "./graphql-dto/signup-input.dto";
import {AuthService} from "./auth.service";

@Resolver()
export class AuthResolver {

    constructor(
        private readonly authService: AuthService
    ) {
    }

    @Mutation(returns => SignupOutputDto)
    async register(
      @Args('singUpInput') singUpInput: SignupInputDto,
    ) {
        return this.authService.signUp(singUpInput);
    }

}
