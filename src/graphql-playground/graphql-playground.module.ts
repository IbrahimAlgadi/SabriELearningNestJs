import { Module } from '@nestjs/common';
import { GraphqlPlaygroundController } from './graphql-playground.controller';

@Module({
  controllers: [GraphqlPlaygroundController]
})
export class GraphqlPlaygroundModule {}
