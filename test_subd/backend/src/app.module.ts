import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'process';
import { ConfigPG } from './config/orm.config';
import { StudentModule } from './student/student.module';


@Module({
  imports: [StudentModule, TypeOrmModule.forRoot(ConfigPG)],
  controllers: [],
  providers: [],
})
export class AppModule {}
