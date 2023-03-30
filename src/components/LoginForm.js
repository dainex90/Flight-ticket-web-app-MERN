import { useState } from "react";
import { Link } from "react-router-dom";
import SideNavbar from "./SideNavbar";
import axios from "axios";


function LoginForm() {

    // states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // event handlers

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById('login-form');
        const formData = new FormData(form);
        //console.log([...formData]);

        axios.post('http://localhost:8000/login/email-password', formData)
            .then(res => {
                console.log(res);
                document.getElementById('login-response-text').innerHTML = `<p>${res.data}</p>`;
                
            })
            .catch(error => {
                document.getElementsByClassName('error-response-data')[0].innerHTML = `${error.message} <br><br>${error.response.data}`;
            });
    }      
    return ( 
        <div className="page-content">
            < SideNavbar />

            <div className="inner-page-content">
                <form id="login-form" onSubmit={handleSubmit}>
                    <label style={{color: 'rgb(50, 50, 50)'}}> <strong>Login</strong> 

                        <input  type="text"
                                className="text-input-area" 
                                value={email}
                                placeholder="Email"
                                onChange={e => setEmail(e.target.value)}

                        />
                        <input  type="text"
                                className="text-input-area" 
                                value={password}
                                placeholder="Enter your Password"
                                onChange={e => setPassword(e.target.value)}
                        />
                        <input type="submit" value="Log in" className="general-button" id="login-btn"/>
                    </label>
                    <div id="login-response-text"></div>
                    <div className="error-response-data"></div>
                    <p style={{fontSize: 'small'}}> Not a member? 
                    <Link to="/signup" style={{color: 'blue'}}> Sign up!</Link> </p>
                </form>
            </div>
        </div>
        
     );
}

export default LoginForm;