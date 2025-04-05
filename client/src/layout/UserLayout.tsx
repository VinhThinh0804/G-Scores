import Header from './Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function UserLayout() {
  return (
    <div className='w-full min-h-screen h-full bg-gray-100'>
      <Header />
      <div className='w-full flex flex-row'>
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  );
}
