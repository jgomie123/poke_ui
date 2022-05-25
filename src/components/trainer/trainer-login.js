import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function TrainerLogin() {
    const emailInput = useRef();
    const passwordInput = useRef();

    async function login() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const user = {
            email: emailInput.current.value,
            password: passwordInput.current.value,
        };

        if (user.password === "hello") {
            alert("You need to reset password");
        } else {
            try {
                const response = await axios.post("http://localhost:8080/poke_project/auth", user);
                console.log(response.data);
                window.location.replace("http://localhost:3000/dashboard");
            } catch (error) {
                console.error(error.response.data);
                alert(error.response.data);
            }
        }
    }

    return (
        <>
            <h4>Welcome back, please log in below.</h4>
            <input placeholder="Enter Email" ref={emailInput}></input>
            <input type="password" placeholder="Enter password" ref={passwordInput}></input>
            <button onClick={login}>Login</button>
        </>
    );
}
