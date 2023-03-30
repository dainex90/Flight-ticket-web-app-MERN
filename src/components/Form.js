import axios from "axios";
import Button from "./Button";
import { useState } from "react";


function Form (props) {

    // states
    const [departureAirport, setDepartureAirport] = useState("departure");
    const [destinationAirport, setDestinationAirport] = useState('destination');

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const getData = (e) => {
        axios.get('http://localhost:8000/flights')
        .then(res => {
            generateList(res.data, e);
        }
        )
        .catch(err => {
            document.getElementsByClassName('error-response-data')[0].innerHTML = err;
        });
    }
    /**
     * @param resData response data fetched
     * @param e the current event e
     */
    function generateList (resData, e) {
        /* if (e.target.value === "departure") { */
            for (let index = 0; index < resData.length; index++) 
            {   
                console.log("in here");
                // Generate 'From' list 
                let li = document.createElement('li');
                li.innerHTML = `${resData[index].departure_airport}`;
                document.getElementById("airport_departure_list").appendChild(li);
            }
        //}
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
        await sleep(4000);
        document.getElementById('post-response').innerHTML = ``;
    }

    function operationType () {
        switch (props.formType) {
            case "Register":
                return 'Buy Ticket'
            case "Update":
                return 'Update Ticket'
            case "Remove":
                return 'Remove Ticket'
            default:
                break;
        }
    }

    return (  
        <>
            <div id="form-container">
                <form id="form" onSubmit={(e) => handleSubmit(e)}>
                    <label> <strong>{operationType()}</strong>
                            <label style={{color: 'orange'}}> <strong>From</strong>
                                <button value={departureAirport} onClick={(e) => getData(e)} className="booking-list-btn">{departureAirport}
                                    <ul id="airport-departure-list" className="airport-list-general">

                                    </ul>
                                </button>
                            </label>
                            <label style={{color: 'orange'}}> <strong>To</strong>
                                <button value={destinationAirport} onClick={(e) => getData(e)} className="booking-list-btn">{destinationAirport}
                                    <ul id="airport-destination-list" className="airport-list-general">
                                    
                                    </ul>
                                </button>
                            </label>
                            <Button />
                    </label>
                    <div id="post-response"></div>
                    <div className="error-response-data"></div>
                </form>
            </div>
        </>
        
    );
}

export default Form;