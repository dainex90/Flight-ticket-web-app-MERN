
import { Outlet, Link } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import Footer from "../components/Footer";
import CompanyLogo from "../components/CompanyLogo";
import SearchArea from "../components/SearchArea";
function MainNavbar() {


    // Internal links
    const partnersItems = ["storlek", "himla rolig", "stoshhlaff", "ClassicVibes"];
    const moreItems = ["easy", "Noggrann", "Hardware", "N64", "Sega Saturn"];

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
                            <DropdownMenu title="Partners" content={partnersItems} type="top-navbar" />
                            <DropdownMenu title="More" content={moreItems} type="top-navbar"/>
                            <SearchArea />
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