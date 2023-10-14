import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
            <NavLink to="/">Home</NavLink>
        </div>
    );
};

export default Header;