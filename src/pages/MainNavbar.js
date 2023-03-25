
import { Outlet, Link } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import SearchIcon from '../imgs/search.png';
import Footer from "../components/Footer";
function MainNavbar() {

    return ( 
        <>
            <div id="top-navbar" className="navbar-general-container">  
                    <nav >
                        <ul>
                            <li>
                                <Link to="/" id="company-name-link" className="navbar-links">Buzz<span style={{ fontFamily: 'cursive'}}>Air</span> </Link>
                            </li>
                            <li>
                                <Link to="/flights" className="navbar-links"> All Flights</Link>
                            </li>
                            <li>
                                <Link to="/booking" className="navbar-links"> Book-a-trip</Link>
                            </li>
                            <div className="search-container">
                                <input type="search" 
                                        className="search-field-general"
                                        placeholder="What are you looking for today?"
                                        / >
                                <button>
                                    <img src={SearchIcon} width="20px" height="20px"></img>
                                </button>
                            </div>

                            < DropdownMenu title="More" type="top-navbar"/>

                            <li>
                                <Link to="/login" id="login-link" className="navbar-links"> Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="navbar-general-container" id="side-navbar">
                    <nav>
                        <ul>
                            < DropdownMenu title="Main Content"type="side-navbar" />
                            < DropdownMenu title="Additional Information" type="side-navbar" />
                            < DropdownMenu title="Programmes" type="side-navbar" />
                        </ul>
                    </nav>
                </div>
                <Footer />
            <Outlet />
        </>
     )
};

export default MainNavbar;