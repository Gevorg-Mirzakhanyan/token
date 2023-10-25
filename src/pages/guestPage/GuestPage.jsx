import "./GuestPage.css";
import { useState } from "react";
function GuestPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleClick= ()=> {
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
                    onChange={(e) => setLogin(e.target.value)}
                />
            </label>
            <label>
                <input 
                    className="guest-input"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button onClick={handleClick} className="guest-input">LogIn</button>
        </div>
    )
}

export default GuestPage;