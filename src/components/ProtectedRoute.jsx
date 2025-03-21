import React, { useContext } from 'react'
import LoginContext from '../context/login-context/LoginContext'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    // const {isLogin}=useContext(LoginContext);
    const login=localStorage.getItem('login')
  return (
    <div>
      {login?<Outlet/>:<Navigate to={'/login'} replace/>}
    
    </div>
  )
}

export default ProtectedRoute
