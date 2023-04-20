import Form from '../components/Form';
import SideNavbar from '../components/SideNavbar';
import { Link } from 'react-router-dom';
import ticket_img from '../imgs/buy_tickets_image.jpg';
import question_img from '../imgs/got_questions_img.jpg';
function Booking() {
    return (
        <div className='page-content'>
            <SideNavbar />
            <div id='booking-container'>
                
                <div id='booking-left-content'>
                    <label className='main-header'>It will only take a few <span style={{color: '#55718e'}}><strong>Seconds..</strong></span> </label>
                    <div id="all-forms-container">
                        <Form formType="Register"/>
                        {/* <Form formType="Update"/>
                        <Form formType="Remove"/> */}
                    </div>
                    
                </div>
                <div id='booking-right-container'>
                    <div id='booking-right-top-content'>
                        <img src={ticket_img}></img>
                        <h3> Already got a ticket but changed your mind?<br></br><br></br></h3> <h4> Click <Link to="removeticket" >Here</Link> </h4>
                    </div>
                    <div id='booking-right-bottom-content'>
                        <img src={question_img}></img>
                        <h3> Got any questions?</h3><h4> We are always here to help you! Just navigate to our contact page or click <Link to="questions" >Here</Link></h4>
                      
                    </div>
                </div>
               
            </div>
        </div>
        
       
    );
}

export default Booking;