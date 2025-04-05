import { Route, Routes } from 'react-router-dom';
import ErrorPage from './layout/ErrorPage';
import UserLayout from './layout/UserLayout';
import DashboardPage from './page/DashboardPage';
import SearchScoresPage from './page/SearchScoresPage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<ErrorPage />} />
      <Route path='/' element={<UserLayout />}>
        <Route path='' element={<DashboardPage />} />
        <Route path='/search-scores' element={<SearchScoresPage/>} />
        <Route path='/reports' element={<div>Reports</div>} />
        <Route path='/settings' element={<div>Settings</div>} />
      </Route>
    </Routes>
  );
}

export default App;
