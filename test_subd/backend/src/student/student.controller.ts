import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { StudentDto } from './dto/student.dto';
import { StudentUpdDto } from './dto/studentUpd.dto';
  import { StudentService } from './student.service';
  
  @Controller('student')
  export class StudentController {
    constructor(private readonly studentService: StudentService) {}
  
    @Get()
    async getAll() {
      return this.studentService.getAll();
    }
  
    @Post()
    async create(@Body() studentDto: StudentDto) {
      return this.studentService.create(studentDto);
    }
  
    @Put()
    async update(@Body() studentDto: StudentUpdDto) {
      return this.studentService.update(studentDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string) {
      return this.studentService.remove(id);
    }
  }