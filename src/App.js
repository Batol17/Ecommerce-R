
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/navbar/NavBar'
import Login from './component/login/Login';
import HomePage from './pages/HomePage';
import Signup from './component/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './component/users/Users';
import Error404 from './pages/Error404';
import CreateUser from './component/users/CreateUser';
import UpdateUser from './component/users/UpdateUser';
import Sidebar from './component/sidebar/Sidebar';
import AdminNavBar   from './component/dashboard/AdminNavBar'
function App() {
  return (
  <>
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='/' element={<HomePage />} />
      <Route path='dashboard/users' element={<Users />} />
      <Route path='dashboard/' element={<Dashboard />} />
      {/* <Route path='dashboard/' element={<Sidebar />} />
      <Route path='dashboard/' element={<AdminNavBar />} /> */}
      <Route path='/*' element={<Error404 />} />
      <Route path='dashboard/users/createuser' element={<CreateUser />} />
      <Route path='dashboard/users/updateuser' element={<UpdateUser />} />
    </Routes>
  </>);
}

export default App;
