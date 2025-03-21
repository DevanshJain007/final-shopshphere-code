import React, { useContext, useState } from 'react';
import LoginContext from '../context/login-context/LoginContext.js';
import storeInLocalStorage from "../components/storeLocalStorage";


const Login = () => {
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLogin, updateNewUser } = useContext(LoginContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newData = { email: newEmail, password: password };
    storeInLocalStorage("login", true);
    updateNewUser(newData);
    setIsLogin(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
