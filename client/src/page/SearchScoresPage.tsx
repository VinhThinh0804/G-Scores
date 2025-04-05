import { useState } from 'react';
import NumberInput from '../component/search/NumberInput';
import ViewResult from '../component/search/ViewResult';
import studentService from '../service/student.service';
import Student from '../entities/student';

export default function SearchScoresPage() {
  const [student, setStudent] = useState<Student | null>(null);

  const handleSearch = async (sbd: string) => {
    const findStudent = await studentService.getStudentById(sbd);
    if (findStudent.result) {
      setStudent(findStudent.result);
    } else {
      setStudent(null);
    }
  };
  return (
    <div className='w-full p-8 bg-slate-50 flex flex-col items-start gap-4'>
      <NumberInput handleSearch={handleSearch} />
      <ViewResult student={student} />
    </div>
  );
}
