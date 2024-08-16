import {Module} from '@nestjs/common';
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
import { PasswordHasherService } from './access/auth/password-hasher/password-hasher.service';
import { AuthModule } from './access/auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import {ScheduleModule} from "@nestjs/schedule";

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
        ScheduleModule.forRoot(),
        UsersModule,
        InstructorsModule,
        InstitutesModule,
        StudentsModule,
        EnrollmentsModule,
        OrdersModule,
        TransactionsModule,
        AuthModule,
        TasksModule
    ],
    controllers: [AppController],
    providers: [AppService, PasswordHasherService],
})
export class AppModule {

    constructor(private readonly connection: Connection) {
        console.log("Connection Status: ", connection.isConnected)
    }

}
