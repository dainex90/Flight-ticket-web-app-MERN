import axios from "axios";
import Button from "./Button";
import { useState } from "react";
import downarrow from '../imgs/list-arrow.png';


function Form (props) {

    // states
    
    const [departureAirport, setDepartureAirport] = useState('');
    const [destinationAirport, setDestinationAirport] = useState('');
    const [airportOptionsIsActive, setAirportOptionsIsActive] = useState(false);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const getData = (e) => {
        
        if (airportOptionsIsActive) {
            setAirportOptionsIsActive(false);
            document.getElementById("airport-departure-list").style.display = 'none';
            document.getElementById("airport-destination-list").style.display = 'none';
            return;
        }
        
        if (e.target.name == "departure") {
            document.getElementById("airport-departure-list").style.display = 'flex';
        }

        else {
            document.getElementById("airport-destination-list").style.display = 'flex';
        }
        

        axios.get('http://localhost:8000/flights')
        .then(res => {
            generateList(res.data, e);
            setAirportOptionsIsActive(true);
        }
        )
        .catch(err => {
            document.getElementsByClassName('error-response-data')[0].innerHTML = err.message;
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
                
                if (e.target.name == "departure") {
                    li.addEventListener('click', () => {
                        setDepartureAirport(li.innerHTML);
                        document.getElementById('remove-dep-button').style.display = 'inline';
                        document.getElementById('dep-arrow').style.display = 'none';
                    });
                    document.getElementById("airport-departure-list").appendChild(li);
                }

                else {
                    li.addEventListener('click', () => {
                        setDestinationAirport(li.innerHTML);
                        document.getElementById('remove-dest-button').style.display = 'inline';
                        document.getElementById('dest-arrow').style.display = 'none';
                    });
                    document.getElementById("airport-destination-list").appendChild(li);
                }
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

    const clearBookingButton = (e) => {
        if (e.target.id === "remove-dep-button") {
            setDepartureAirport('');
            document.getElementById('dep-arrow').style.display = 'block';
        }
        else {
            setDestinationAirport('');
            document.getElementById('dest-arrow').style.display = 'block';
        }
        document.getElementById(e.target.id).style.display = 'none';
        
    }

    return (  
        <>
            <div id="form-container">
                <form id="form" onSubmit={(e) => handleSubmit(e)}>
                    <label> <strong>{operationType()}</strong>
                            <label style={{color: 'orange'}}> <strong>Departure</strong>
                                <button value={departureAirport} name="departure" onClick={(e) => getData(e)} className="booking-list-btn text-input-area">{departureAirport}
                                <img id="dep-arrow" src={downarrow} width='15px' height='20px'></img>
                                    <ul id="airport-departure-list" className="airport-list-general">
                                    
                                    </ul>
                                    <button id="remove-dep-button" style={{color: 'red', fontWeight: "1000", display: 'none', background: '0', border: '0'}} onClick={e => clearBookingButton(e)}>X</button>
                                </button>
                                
                            </label>
                            <label style={{color: 'orange'}}> <strong>To</strong>
                                <button value={destinationAirport} name="destination" onClick={(e) => getData(e)} className="booking-list-btn text-input-area">{destinationAirport}
                                <img id="dest-arrow" src={downarrow} width='15px' height='20px'></img>
                                    <ul id="airport-destination-list" className="airport-list-general">
                                    
                                    </ul>
                                    <button id="remove-dest-button" style={{color: 'red', fontWeight: "1000", display: 'none', background: '0', border: '0'}} onClick={e => clearBookingButton(e)}>X</button>
                                </button>
                                
                            </label>
                    </label>
                    <Button />
                    
                    <div id="post-response"></div>
                    <div className="error-response-data"></div>
                </form>
            </div>
        </>
        
    );
}

export default Form;