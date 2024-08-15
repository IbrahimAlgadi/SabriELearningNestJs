import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { InstructorsModule } from './e_learning/instructors/instructors.module';
import { InstitutesModule } from './e_learning/institutes/institutes.module';
import { StudentsModule } from './e_learning/students/students.module';
import { EnrollmentsModule } from './access/enrollments/enrollments.module';
import { OrdersModule } from './access/orders/orders.module';
import { TransactionsModule } from './access/transactions/transactions.module';

@Module({
  imports: [UsersModule, InstructorsModule, InstitutesModule, StudentsModule, EnrollmentsModule, OrdersModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
