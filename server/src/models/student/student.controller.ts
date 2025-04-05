import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { StudentService } from './student.service';
import { StudentEntity } from './entities/student.entity';
import { ResponseObject } from 'src/utils/objects';
// import { CreateStudentDto } from './dto/create-student.dto';
// import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Post('seed')
  seedData() {
    return this.studentService.seedData();
  }

  @ApiOkResponse({ type: StudentEntity })
  @Get()
  async findAll() {
    const findStundents = await this.studentService.findAll();
    if (!findStundents) {
      throw new NotFoundException('Student not found!');
    }
    return ResponseObject.create('Get students successfully!', findStundents);
  }

  @ApiOkResponse({ type: [StudentEntity] })
  @Get('top10')
  async getTop10Students() {
    const topStudents = await this.studentService.getTop10Students();
    return ResponseObject.create(
      'Top 10 students fetched successfully!',
      topStudents,
    );
  }

  @ApiOkResponse({ type: StudentEntity })
  @Get(':sbd')
  async findOne(@Param('sbd') sbd: string) {
    const findStudent = await this.studentService.findOne(sbd);
    if (!findStudent) {
      throw new NotFoundException('Student not found!');
    }
    return ResponseObject.create('Get student successfully!', findStudent);
  }

  @ApiOkResponse({ type: Object })
  @Get('report/:subject')
  async reportBySubject(@Param('subject') subject: string) {
    const validSubjects = [
      'toan',
      'nguVan',
      'ngoaiNgu',
      'vatLi',
      'hoaHoc',
      'sinhHoc',
      'lichSu',
      'diaLi',
      'gdcd',
    ];

    if (!validSubjects.includes(subject)) {
      throw new NotFoundException(`Subject ${subject} is not valid!`);
    }

    const report = await this.studentService.getReportBySubject(subject);
    return ResponseObject.create(
      `Report for ${subject} generated successfully!`,
      report,
    );
  }
}
