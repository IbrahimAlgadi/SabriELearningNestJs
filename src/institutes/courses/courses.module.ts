import { Module } from '@nestjs/common';
import { ExamsModule } from './exams/exams.module';
import { CourseUnitsModule } from './course_units/course_units.module';

@Module({
  imports: [ExamsModule, CourseUnitsModule]
})
export class CoursesModule {}
