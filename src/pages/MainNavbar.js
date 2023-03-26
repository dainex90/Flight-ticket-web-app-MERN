
import { Outlet, Link } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import SearchIcon from '../imgs/search.png';
import Footer from "../components/Footer";
import CompanyLogo from "../components/CompanyLogo";
import Booking from "./Booking";
import SideNavbar from '../components/SideNavbar';
function MainNavbar() {

    return ( 
        <>
            <div id="top-navbar" className="navbar-general-container">  
                    <nav >
                        <ul>
                            < CompanyLogo />
                            <li>
                                <Link to="/flights" className="navbar-links"> All Flights</Link>
                            </li>
                            <li>
                                <Link to="/booking" className="navbar-links"> Tickets </Link>
                            </li>
                            <DropdownMenu title="Partners" type="top-navbar" />
                            <DropdownMenu title="More" type="top-navbar"/>
                            <div className="search-container">
                                <input type="search" 
                                        className="search-field-general"
                                        placeholder="What are you looking for today?"
                                        / >
                                <button>
                                    <img src={SearchIcon} width="20px" height="20px"></img>
                                </button>
                            </div>
                            <div id="login-link" >
                                <li>
                                    <Link to="/login" className="navbar-links"> Login</Link>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>     
                <Outlet />
                <Footer />
          
        </>
     )
};

export default MainNavbar;