import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const nav = useNavigate();
  return (
    <div className='min-w-[230px] py-3 px-6 bg-yellow-200'>
      <div className='flex flex-col '>
        <h1 className='text-2xl font-bold w-full text-center mb-3'>Menu</h1>
        <ul className='flex flex-col gap-4'>
            <li onClick={() => { nav('/')}} className='text-lg hover:bg-slate-50 w-fit cursor-pointer'>Dashboard</li>
            <li onClick={() => { nav('/search-scores')}} className='text-lg hover:bg-slate-50 w-fit cursor-pointer'>Search Scores</li>
            <li onClick={() => { nav('/reports')}} className='text-lg hover:bg-slate-50 w-fit cursor-pointer'>Reports</li>
            <li onClick={() => { nav('/settings')}} className='text-lg hover:bg-slate-50 w-fit cursor-pointer'>Settings</li>
        </ul>
      </div>
    </div>
  )
}
