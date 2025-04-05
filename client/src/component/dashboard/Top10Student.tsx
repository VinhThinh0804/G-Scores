import React, { useEffect, useState } from 'react';
import http from '../../service/http';

type TopStudent = {
  sbd: string;
  toan: number;
  vatLi: number;
  hoaHoc: number;
};

const Top10Student: React.FC = () => {
  const [students, setStudents] = useState<TopStudent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTopStudents = async () => {
      try {
        const response = await http.get('student/top10');
        setStudents(response.result);
      } catch (error) {
        console.error('Failed to fetch top students:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopStudents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (students.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Top 10 Students (Toán, Lý, Hóa)</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Rank</th>
            <th className="border border-gray-300 px-4 py-2 text-left">SBD</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.sbd}>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{student.sbd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Top10Student;