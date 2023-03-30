import SideNavbar from "../components/SideNavbar";

function LoggedIn(props) {
    return ( 

        <div className='page-content'>
            < SideNavbar />
            <div className="inner-page-content">
                <p style={{fontSize: 'larger', fontWeight: '500', color: 
                'rgb(56, 67, 78)'}}> Welcome <span style={{color: 'orange'}}>
                    {props.email}</span>, We have missed you!</p>
            </div>
        </div>
     );
}

export default LoggedIn;