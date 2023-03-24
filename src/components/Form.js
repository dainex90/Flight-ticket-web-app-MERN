import axios from "axios";
import Button from "./Button";
function Form (props) {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    // Post Form w Axios http
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById('form');
        const formData = new FormData(form);
        //console.log([...formData]);

        axios.post('http://localhost:8000/flights', formData)
            .then(res => {
                //console.log(res);
                document.getElementById('post-response').innerHTML = `${res.data}`;
                wait();
            })
            .catch(err => console.log(err))
    }

    async function wait () {
        await sleep(3000);
        document.getElementById('post-response').innerHTML = ``;
    }

    function operationType () {
        switch (props.formType) {
            case "Register":
                return 'Add Flight'
            case "Update":
                return 'Update Flight'
            case "Remove":
                return 'Remove Flight'
            default:
                break;
        }
    }

    return (  
        <>
            <div id="form-container">
            <form id="form" onSubmit={(e) => handleSubmit(e)}>
                <label> {operationType()}
                        <label style={{color: 'orange'}}> <strong>From</strong>
                            <button className="booking-list-btn">Departure</button>
                        </label>
                        <label style={{color: 'orange'}}> <strong>To</strong>
                            <button className="booking-list-btn">Destination</button>
                        </label>
                        <Button />
                </label>
                <div id="post-response"></div>
            </form>
        </div>
        </>
        
    );
}

export default Form;