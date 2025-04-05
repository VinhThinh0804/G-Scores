import Student from '../../entities/student';

export default function ViewResult({ student }: { student?: Student | null }) { 
    console.log(student);
  return (
    <div className='w-[85%] p-4 flex flex-col items-start bg-white rounded-md shadow-md gap-4'>
      <div className='font-bold text-2xl'>Detail Scores</div>
      <div className='w-full'>
        {student != null ? (
          <table className='w-full border-collapse border border-gray-300'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='border border-gray-300 px-4 py-2 text-left'>Subject</th>
                <th className='border border-gray-300 px-4 py-2 text-left'>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-gray-300 px-4 py-2'>Toán</td>
                <td className='border border-gray-300 px-4 py-2'>{student.toan ?? 'N/A'}</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-4 py-2'>Ngữ Văn</td>
                <td className='border border-gray-300 px-4 py-2'>{student.nguVan ?? 'N/A'}</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-4 py-2'>Ngoại Ngữ</td>
                <td className='border border-gray-300 px-4 py-2'>{student.ngoaiNgu ?? 'N/A'}</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-4 py-2'>Vật Lý</td>
                <td className='border border-gray-300 px-4 py-2'>{student.vatLi ?? 'N/A'}</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-4 py-2'>Hóa Học</td>
                <td className='border border-gray-300 px-4 py-2'>{student.hoaHoc ?? 'N/A'}</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-4 py-2'>Sinh Học</td>
                <td className='border border-gray-300 px-4 py-2'>{student.sinhHoc ?? 'N/A'}</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-4 py-2'>Lịch Sử</td>
                <td className='border border-gray-300 px-4 py-2'>{student.lichSu ?? 'N/A'}</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-4 py-2'>Địa Lý</td>
                <td className='border border-gray-300 px-4 py-2'>{student.diaLi ?? 'N/A'}</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-4 py-2'>GDCD</td>
                <td className='border border-gray-300 px-4 py-2'>{student.gdcd ?? 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className='text-base'>Detailed view of search scores here!</div>
        )}
      </div>
    </div>
  );
}
