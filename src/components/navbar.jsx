import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Home Page</Link>
            <span> </span>
            <Link to="/login">Login</Link>
            <span> </span>
            <Link to="/register">Sign up</Link>
            <span> </span>
        </nav>
    );
}
