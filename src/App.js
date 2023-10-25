import { useState, useEffect } from 'react';
import './App.css';
import AuthPage from './pages/authPage/AuthPage';
import GuestPage from './pages/guestPage/GuestPage';


function App() {

  const [token, setToken] = useState('')

  useEffect(() => {
      let tokenData = localStorage.getItem('loginData')
      setToken(tokenData)
  }, []);



  return token ? <AuthPage /> : <GuestPage />
}

export default App;
