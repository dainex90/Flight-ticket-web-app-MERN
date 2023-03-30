import SideNavbar from "../components/SideNavbar";

function PageNotFound() {
    return ( 
        <div className='page-content'>
            < SideNavbar />
            <div className="inner-page-content">
                <div className="error-response-data"> Page not found - status: 404 </div>
            </div>
            </div>
        
     );
}

export default PageNotFound;