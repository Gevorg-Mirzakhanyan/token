import {  NavLink, Route, Routes, useNavigate} from "react-router-dom";
import Dashboard from "./components/Dasboard";
import Users from "./components/Users";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Settings from "./components/Settings";
import { routerLinks } from "./router/router";

function AuthPage() {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('loginData');
        navigate('');
        window.location.reload();
      };

   
    return(
        <div>
           <button onClick={handleLogOut}>Log out</button>
            <ul>
                <li>
                    <NavLink to={routerLinks.DASHBOARD}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to={routerLinks.USERS}>Users</NavLink>
                </li>
                <li>
                    <NavLink to={routerLinks.PRODUCTS}>Products</NavLink>
                </li>
                <li>
                    <NavLink to={routerLinks.CATEGORIES}>Categories</NavLink>
                </li>
                <li>
                    <NavLink to={routerLinks.SETTINGS}>Settings</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path={routerLinks.DASHBOARD} element={<Dashboard />} />
                <Route path={routerLinks.USERS} element={<Users />} />
                <Route path={routerLinks.PRODUCTS} element={<Products />} />
                <Route path={routerLinks.CATEGORIES} element={<Categories />} />
                <Route path={routerLinks.SETTINGS} element={<Settings />} />
            </Routes>
        </div>
    )
}

export default AuthPage;