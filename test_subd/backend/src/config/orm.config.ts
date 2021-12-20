import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Student } from 'src/student/entity/student.entity';

export const ConfigPG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'subd',
  synchronize: true,
  entities: [Student],
};