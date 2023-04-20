
import { Outlet, Link } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import Footer from "../components/Footer";
import CompanyLogo from "../components/CompanyLogo";
import SearchArea from "../components/SearchArea";
import HamburgerBar from '../components/HamburgerBar';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function MainNavbar() {

    // Redux setup
    const { email, password, loggedIn } = useSelector(state => state.user);

    // debug
    console.log(`User: ${email} Password: ${password} Logged In: ${loggedIn}`);
    const dispatch = useDispatch();
    // Internal links
    const partnersItems = ["Tensent", "Listings", "Micro Solutions"];
    const moreItems = ["News", "Internship", "Service Plans", "Settings"];

    const signOut = () => {
        dispatch(signOut());
    }

    return ( 
        <>
            <div id="top-navbar" className="navbar-general-container">  
                    <nav >
                        <HamburgerBar />
                        <ul>
                        
                            < CompanyLogo />
                            <div id="topnav-links-container-left">
                                <li>
                                    <Link to="/flights" className="navbar-links"> All Flights</Link>
                                </li>
                                <li>
                                    <Link to="/booking" className="navbar-links"> Tickets </Link>
                                </li>
                                <DropdownMenu title="Partners" content={partnersItems} type="top-navbar" />
                                <DropdownMenu title="More" content={moreItems} type="top-navbar"/>
                                {loggedIn && <Link to="/dashboard" className="navbar-links" id="dashboard-button"> Dashboard </Link>}
                            </div>
                        </ul>
                    </nav>
                    <nav>
                        {/* <SearchArea /> */}
                        <ul id="search-login-big-screen">
                            <SearchArea />
                                <div id="topnav-links-container-right">
                                    <li id="login-btn">
                                        {loggedIn ? <Link to="/login" className="navbar-links" onClick={signOut}> Sign Out</Link>: <Link to="/login" className="navbar-links"> Login</Link>}
                                        
                                    </li>
                                    <li id="signup-btn">
                                        {!loggedIn && <Link to="/signup" className="navbar-links"> Sign up</Link>}
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