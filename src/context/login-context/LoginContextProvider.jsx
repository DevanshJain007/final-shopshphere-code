import React, { useEffect, useState } from 'react';
import LoginContext from './LoginContext';
import storeInLocalStorage from '../../components/storeLocalStorage';

const LoginContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const updateNewUser=(newUser)=>{
    setUser(newUser)
    localStorage.setItem('user',JSON.stringify(newUser))
    setIsLogin(true);
    console.log(isLogin);
    storeInLocalStorage('login','true')
    
  }
  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin, user, setUser,updateNewUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
