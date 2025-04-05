import StudentReportBySubject from '../component/dashboard/StudentReportBySubject';
import Top10Student from '../component/dashboard/Top10Student';

export default function DashboardPage() {
  return (
    <div className='w-full p-4 bg-slate-50 flex flex-col gap-4'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
      <Top10Student/>
      <div className='grid grid-cols-3 gap-4'>
        <StudentReportBySubject subject='toan' />
        <StudentReportBySubject subject='nguVan' />
        <StudentReportBySubject subject='ngoaiNgu' />
        <StudentReportBySubject subject='vatLi' />
        <StudentReportBySubject subject='hoaHoc' />
        <StudentReportBySubject subject='sinhHoc' />
        <StudentReportBySubject subject='lichSu' />
        <StudentReportBySubject subject='gdcd' />
        <StudentReportBySubject subject='diaLi' />
      </div>
    </div>
  );
}
