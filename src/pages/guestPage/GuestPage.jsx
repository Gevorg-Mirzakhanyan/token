import "./GuestPage.css";
import { useState } from "react";
function GuestPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    

    const handleClick= ()=> {
        setLoginError('');
        setPasswordError('');
    
        if (login.trim() === '') {
          setLoginError('Login is required.');
          return;
        }
    
        if (password.trim() === '') {
          setPasswordError('Password is required.');
          return;
        }
        const loginData = { login, password };
        localStorage.setItem('loginData', JSON.stringify(loginData));
        window.location.reload();
    }
    

    return(
        <div className="guest-page">
            <label>
                <input
                    className="guest-input"
                    placeholder="Login"
                    type="text"
                    onChange={handleLoginChange}
                />
            </label>
            <label>
            {loginError && <div className="error">{loginError}</div>}
                <input 
                    className="guest-input"
                    placeholder="Password"
                    type="password"
                    onChange={handlePasswordChange}
                />
            </label>
            {passwordError && <div className="error">{passwordError}</div>}
            <button onClick={handleClick} className="guest-input">LogIn</button>
        </div>
    )
}

export default GuestPage;