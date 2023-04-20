import { useState } from "react";
import { Link } from "react-router-dom";
import SideNavbar from "./SideNavbar";
import axios from "axios";
import welcometext_login_screen from '../imgs/Shutterstock_1249931161.png';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/user/userSlice";


function LoginForm() {

    // Redux setup
    const dispatch = useDispatch();

    // states
    const [emailLocal, setEmailLocal] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();
    // event handlers

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8000/login/${emailLocal}-${password}`, {
            params: {
                email: emailLocal,
                password: password
            }
        })
            .then(function (response) {
                // Success
              // Add user details to the global state with redux-toolkit
              dispatch(addUser(response.data));
              // and navigate to the user dashboard
              navigate("/dashboard");
            })
            .catch(function (error) {
              //handle error, does the user not exist?
              console.log(error);
              document.getElementById("login-response-text").innerHTML = `${error.message}`;
            });
    }   
    
    return ( 
        <div className="page-content">
            < SideNavbar />
            <div id="login-inner-page">
                
                {/* <div className="line-container three">
                </div> */}
                <div id="login-container">
                    <img src={welcometext_login_screen} width='670px' height='280px'></img>
                    <form id="login-form" onSubmit={handleSubmit}>
                    
                    <label style={{color: 'rgb(50, 50, 50)'}}> <strong>Login</strong> 

                        <input  type="text"
                                className="text-input-area" 
                                value={emailLocal}
                                placeholder="Email"
                                onChange={e => setEmailLocal(e.target.value)}

                        />
                        <input  type="text"
                                className="text-input-area" 
                                value={password}
                                placeholder="Enter your Password"
                                onChange={e => setPassword(e.target.value)}
                        />
                        <input type="submit" value="Log in" className="general-button"/>
                    </label>
                    <div id="login-response-text" className="error-response-data"></div>

                    <div id="login-options">
                        <p>Remember me
                            <input type="checkbox" 
                                    />
                        </p>
                        <p><Link to="/resetpassword" className="footer-links">Forgot Password</Link></p>
                        <div>
                            <p style={{color: "darkgray"}}> Not a member? 
                                <Link to="/signup" style={{color: 'blue'}} className="footer-links"> Sign up!</Link>
                            </p>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
     );
}

export default LoginForm;