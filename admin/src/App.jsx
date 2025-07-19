import { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import { DoctorContext } from './context/DoctorContext';
import FacultyDashboard from './pages/Faculty/FacultyDashboard';
import FacultyAppointments from './pages/Faculty/FacultyAppointments';
import FacultyProfile from './pages/Faculty/FacultyProfile';
const App = () => {
  const {aToken} = useContext(AdminContext);
  const {dToken} = useContext(DoctorContext)
  
  // Redirect component based on user type
  const DefaultRedirect = () => {
    if (aToken) {
      return <Navigate to="/admin-dashboard" replace />;
    } else if (dToken) {
      return <Navigate to="/faculty-dashboard" replace />;
    }
    return <Navigate to="/login" replace />;
  };

  return aToken || dToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <NavBar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          {/* Default redirect */}
          <Route path='/' element={<DefaultRedirect />} />
          {/* Admin Route */}
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-faculty' element={<AddDoctor />} />
          <Route path='/faculty-list' element={<DoctorsList />} />
          {/* Faculty Route */}
          <Route path='/faculty-dashboard' element={<FacultyDashboard />} />
          <Route path='/faculty-appointments' element={<FacultyAppointments />} />
          <Route path='/faculty-profile' element={<FacultyProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App