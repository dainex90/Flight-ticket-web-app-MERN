import CompanyLogo from "../components/CompanyLogo";
import Flights from '../pages/Flights'
import SideNavbar from "../components/SideNavbar";
function Home() {
    return (  
        <div className="page-content">
            <SideNavbar />
            <div className="inner-page-content">
                <div id="home-page-inner">
                    <CompanyLogo />
                    <div id="tag">Reaching new Heights .</div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;