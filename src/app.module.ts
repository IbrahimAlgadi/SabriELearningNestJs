import {MiddlewareConsumer, NestModule, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './access/users/users.module';
import {EnrollmentsModule} from './sales/enrollments/enrollments.module';
import {OrdersModule} from './sales/orders/orders.module';
import {TransactionsModule} from './sales/transactions/transactions.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {InstructorsModule} from "./institutes/instructors/instructors.module";
import {InstitutesModule} from "./institutes/institutes.module";
import {StudentsModule} from "./institutes/students/students.module";
import {Connection} from "typeorm";
import {PasswordHasherService} from './access/auth/password-hasher/password-hasher.service';
import {AuthModule} from './access/auth/auth.module';
import {TasksModule} from './tasks/tasks.module';
import {ScheduleModule} from "@nestjs/schedule";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
// import * as express from 'express';
// import * as expressGraphiQL from 'express-graphiql';
import { join } from 'path';
import { GraphqlPlaygroundModule } from './graphql-playground/graphql-playground.module';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'e_learning',
            entities: [__dirname + "/**/*.entity{.ts,.js}"],
            // synchronize: false,
            synchronize: true,
        }),
        // GraphQLModule.forRoot({
        //     // set to true to automatically generate schema
        //     autoSchemaFile: true,
        // }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            playground: true,
            csrfPrevention: false,
            introspection: true,
            // autoSchemaFile: true,
            // graphiql: true,
            // plugins: [ApolloServerPluginLandingPageLocalDefault()]
        }),
        ScheduleModule.forRoot(),
        UsersModule,
        InstructorsModule,
        InstitutesModule,
        StudentsModule,
        EnrollmentsModule,
        OrdersModule,
        TransactionsModule,
        AuthModule,
        TasksModule,
        GraphqlPlaygroundModule
    ],
    controllers: [AppController],
    providers: [AppService, PasswordHasherService],
})
export class AppModule {

    // configure(consumer: MiddlewareConsumer) {
    //     consumer
    //         .apply(
    //             expressGraphiQL({
    //                 endpointURL: '/graphql', // same as GraphQLModule path
    //             }),
    //         )
    //         .forRoutes('/graphiql');
    // }

    constructor(
        private readonly connection: Connection,
        // private readonly consumer: MiddlewareConsumer,
    ) {
        console.log("Connection Status: ", connection.isConnected);
    }

}
