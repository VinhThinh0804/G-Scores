import Header from './Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function UserLayout() {
  return (
    <div className='w-full h-full bg-gray-100 min-h-screen'>
      <Header />
      <div className='w-full flex flex-row min-h-screen'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
