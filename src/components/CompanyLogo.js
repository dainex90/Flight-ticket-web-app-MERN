import { Link } from "react-router-dom";

function CompanyLogo() {
    return (
        <div> 
            <li>
                <Link to="/" id="company-name-link" className="navbar-links">Buzz<span style={{ fontFamily: 'cursive'}}>Air</span> </Link>
            </li>
        </div>
     );
}

export default CompanyLogo;