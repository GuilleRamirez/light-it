import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Header from './components/header/header.tsx';
import Patients from './pages/patients/patients.tsx';

function PatientsRoute() {
  return <Patients />;
}

function Layout() {
  return (
    <div className='pageWrapper'>
      <Header />
      <div className='contentWrapper'>
        <Outlet />
      </div>
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Layout />}>
          <Route index element={<PatientsRoute />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
