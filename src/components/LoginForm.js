import { useState } from "react";
import { Link } from "react-router-dom";
import SideNavbar from "./SideNavbar";

function LoginForm() {

    // states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // event handlers

    const handleEvent = (e) => {

    }

    return ( 
        <div className="page-content">
            < SideNavbar />

            <div className="inner-page-content">
                <form id="login-form">
                    <label style={{color: 'rgb(50, 50, 50)'}}> <strong>Login</strong> 

                        <input type="text"
                                className="text-input-area" 
                                value={username}
                                placeholder="Username"
                                onChange={e => setUsername(e.target.value)}

                        />
                        <input type="text"
                                className="text-input-area" 
                                value={password}
                                placeholder="Enter your Password"
                                onChange={e => setPassword(e.target.value)}
                        />

                        <input type="submit" value="Log in" className="general-button" id="login-btn"/>
                    </label>
                    <p style={{fontSize: 'small'}}> Not a member? 
                    <Link to="/signup" style={{color: 'blue'}}> Sign up!</Link> </p>
                </form>
            </div>
        </div>
        
     );
}

export default LoginForm;