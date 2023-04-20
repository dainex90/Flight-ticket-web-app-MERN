import SideNavbar from "../components/SideNavbar";

function PageNotFound() {
    return ( 
        <div className='page-content'>
            < SideNavbar />
            <div className="inner-page-content page-not-found-container">
                <div> 
                    <h1>Ops! There is nothing Here ... </h1>
                    <h2 style={{color: 'red'}}> 404 </h2>        
                </div>
            </div>
        </div>
        
     );
}

export default PageNotFound;