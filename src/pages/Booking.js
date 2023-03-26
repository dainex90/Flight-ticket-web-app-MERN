import Form from '../components/Form';
import SideNavbar from '../components/SideNavbar';

function Booking() {
    return (
        <div className='page-content'>
            <SideNavbar />
            <div className="inner-page-content">
                <label className='main-header'>Give it a few seconds ..
                <div id="all-forms-container">
                    <Form formType="Register"/>
                    <Form formType="Update"/>
                    <Form formType="Remove"/>
                </div>
                </label>
            </div>
        </div>
        
       
    );
}

export default Booking;