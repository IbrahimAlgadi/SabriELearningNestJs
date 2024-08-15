import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { CertificatesModule } from './certificates/certificates.module';

@Module({
  imports: [CoursesModule, CertificatesModule]
})
export class InstitutesModule {}
