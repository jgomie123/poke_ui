import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import PokemonWelcome from "./components/pokemon/pokemon-welcome";
import TrainerDashboard from "./components/trainer/trainer-dashboard";
import TrainerLogin from "./components/trainer/trainer-login";
import TrainerRegister from "./components/trainer/trainer-register";
import TrainerWelcome from "./components/trainer/trainer-welcome";

function App() {
    // React-router-dom provideds us the ability to emulate multipage websites while still only being a single page
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="login" element={<TrainerLogin />} />
                    <Route path="register" element={<TrainerRegister />} />
                    <Route exact path="" element={<TrainerWelcome />} />
                    <Route path="pokemon" element={<PokemonWelcome />} />
                    <Route path="dashboard" element={<TrainerDashboard></TrainerDashboard>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
