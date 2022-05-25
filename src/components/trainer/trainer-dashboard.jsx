import { Link } from "react-router-dom";

export default function TrainerDashboard() {
    return (
        <>
            <h1>Welcome to your dashboard!!!!!</h1>
            <Link to="/pokemon">View Pokemon Here</Link>
        </>
    );
}
