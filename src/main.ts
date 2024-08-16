import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as expressGraphiQL from 'express-graphiql';


async function bootstrap() {
    const app = await NestFactory.create(AppModule, {cors: true});
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
        .setTitle('E-Learning API')
        .setDescription('Api To Access E-Learning Services With NestJS')
        .setVersion('1.0')
        .addTag('e_learning')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

    // app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));

    await app.listen(3000);
}

bootstrap();
