import Form from '../components/Form';

function Booking() {
    return (
        <div id="all-forms-container">
            <Form formType="Register"/>
            <Form formType="Update"/>
            <Form formType="Remove"/>
        </div>
    );
}

export default Booking;