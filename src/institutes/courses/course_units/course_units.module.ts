import { Module } from '@nestjs/common';
import { UnitContentModule } from './unit_content/unit_content.module';

@Module({
  imports: [UnitContentModule]
})
export class CourseUnitsModule {}
