import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlPlaygroundController } from './graphql-playground.controller';

describe('GraphqlPlaygroundController', () => {
  let controller: GraphqlPlaygroundController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GraphqlPlaygroundController],
    }).compile();

    controller = module.get<GraphqlPlaygroundController>(GraphqlPlaygroundController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
