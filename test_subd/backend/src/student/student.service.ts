import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentDto } from './dto/student.dto';
import { StudentUpdDto } from './dto/studentUpd.dto';
import { Student } from './entity/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async getAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async create(studentDto: StudentDto): Promise<Student> {
    const newStudent = this.studentRepository.create(studentDto);

    return this.studentRepository.save(newStudent);
  }

  async update(studentDto: StudentUpdDto): Promise<void> {
    await this.studentRepository.save(studentDto);
  }

  async remove(id: string): Promise<void> {
    await this.studentRepository.delete(id);
  }
}