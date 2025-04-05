import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import * as fs from 'fs';
import * as csv from 'csv-parser';

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) {}

  seedData() {
    // Read CSV file and parse data
    const data: any[] = [];
    const filePath = 'src/lib/diem_thi_thpt_2024.csv';

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          data.push(row);
        })
        .on('end', async () => {
          try {
            await this.prisma.student.createMany({
              data: data.map((item) => ({
                sbd: item.sbd,
                toan: parseFloat(item.toan),
                nguVan: parseFloat(item.ngu_van),
                ngoaiNgu: parseFloat(item.ngoai_ngu),
                vatLi: parseFloat(item.vat_li),
                hoaHoc: parseFloat(item.hoa_hoc),
                sinhHoc: parseFloat(item.sinh_hoc),
                lichSu: parseFloat(item.lich_su),
                gdcd: parseFloat(item.gdcd),
              })),
            });
            resolve('Seed data successfully!');
          } catch (error) {
            reject(error);
          }
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  findAll() {
    return this.prisma.student.findMany({
      select: {
        sbd: true,
        toan: true,
        nguVan: true,
        ngoaiNgu: true,
        vatLi: true,
        hoaHoc: true,
        sinhHoc: true,
        lichSu: true,
        diaLi: true,
        gdcd: true,
        maNgoaiNgu: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  findOne(sbd: string) {
    return this.prisma.student.findUnique({
      where: { sbd: sbd },
    });
  }

  async getReportBySubject(subject: string) {
    const students = await this.prisma.student.findMany({
      select: { [subject]: true },
    });

    const report = {
      '>=8': 0,
      '6-8': 0,
      '4-6': 0,
      '<4': 0,
    };

    students.forEach((student) => {
      const score = student[subject];
      if (score !== null && score !== undefined) {
        if (score >= 8) report['>=8']++;
        else if (score >= 6) report['6-8']++;
        else if (score >= 4) report['4-6']++;
        else report['<4']++;
      }
    });

    return { [subject]: report };
  }

  async getTop10Students() {
    const students = await this.prisma.student.findMany({
      orderBy: [{ toan: 'desc' }, { vatLi: 'desc' }, { hoaHoc: 'desc' }],
      take: 10,
    });

    return students;
  }
}
