import React, { useState } from 'react';

export default function NumberInput({ handleSearch }: { handleSearch: (sbd: string) => void }) {
  const [sbd, setSbd] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSbd(e.target.value);
  };

  const handleOnSearch = () => {
    if (sbd === '') {
      alert('Please enter a registation number');
    }
    handleSearch(sbd);
  };

  return (
    <div className='w-[85%] p-4 flex flex-col items-start bg-white rounded-md shadow-md gap-2'>
      <div className='font-bold text-2xl'>User Registation</div>
      <div className='w-full flex flex-col items-start gap-1'>
        <label className='text-base font-medium'>Registation number:</label>
        <div className='w-full flex flex-row items-center gap-2'>
          <input
            onChange={handleChange}
            value={sbd}
            type='number'
            className='border text-sm border-gray-300 rounded-md p-2 w-[250px]'
            placeholder='Enter registation number'
          />
          <button onClick={handleOnSearch} className='bg-black text-white rounded-md py-1 px-3'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
