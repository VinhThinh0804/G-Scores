import React, { useEffect, useState } from 'react';
import http from '../../service/http';

type ReportData = {
  [key: string]: {
    '>=8': number;
    '6-8': number;
    '4-6': number;
    '<4': number;
  };
};

const StudentReportBySubject: React.FC<{ subject: string }> = ({ subject }) => {
  const [report, setReport] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await http.get(`student/report/${subject}`);
        setReport(response.result);
      } catch (error) {
        console.error('Failed to fetch report:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, [subject]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!report) {
    return <div>No data available for {subject}</div>;
  }

  const subjectReport = report[subject];

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Report for {subject.toUpperCase()}</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Score Range</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(subjectReport).map(([range, count]) => (
            <tr key={range}>
              <td className="border border-gray-300 px-4 py-2">{range}</td>
              <td className="border border-gray-300 px-4 py-2">{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentReportBySubject;