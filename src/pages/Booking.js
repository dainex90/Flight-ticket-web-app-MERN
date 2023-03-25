import Form from '../components/Form';

function Booking() {
    return (
        
        <div className='page-content'>
            <h1 className='main-header'>Give it a few seconds ..</h1>
            <div id="all-forms-container">
                <Form formType="Register"/>
                <Form formType="Update"/>
                <Form formType="Remove"/>
            </div>
        </div>
        
       
    );
}

export default Booking;