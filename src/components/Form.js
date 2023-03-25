import axios from "axios";
import Button from "./Button";
import { useState } from "react";

function Form (props) {

    // states
    const [departureAirport, setDepartureAirport] = useState("...");
    const [destinationAirport, setDestinationAirport] = useState('...');

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const getData = (e) => {
        axios.get('http://localhost:8000/flights')
        .then(res => {
            const airport = "";

            for (let index = 0; index < res.data.length; index++) {
                if (e.target.name === "departure") 
                {
                    airport = res.data[index].departure_airport;

                    let li = document.createElement('li');
                    li.innerHTML = `${airport}`;
                    document.getElementById('airport-departure-list').appendChild(li);
                    li.addEventListener('click', () => 
                    {
                        setDepartureAirport(airport);
                        document.getElementById('airport-departure-list').style.display = 'none';
                    }
                    )
                }
                else 
                {
                    airport = res.data[index].destination_airport;

                    let li = document.createElement('li');
                    li.innerHTML = `${airport}`;
                    document.getElementById('airport-destination-list').appendChild(li);
                    li.addEventListener('click', () => 
                    {
                        setDestinationAirport(airport);
                        document.getElementById('airport-destination-list').style.display = 'none';
                    }
                    )   
                }
            }
        })
        .catch(err => {
            document.getElementById('response-data').innerHTML = `Obs, something went wrong! <br><br><strong>${err}</strong>`
        });
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
                <label> {operationType()}
                        <label style={{color: 'orange'}}> <strong>From</strong>
                            <button name="departure" onClick={(e) => getData(e)} className="booking-list-btn">{departureAirport} 
                                <ul id="airport-departure-list"></ul>
                            </button>
                        </label>
                        <label style={{color: 'orange'}}> <strong>To</strong>
                            <button name="destination" onClick={(e) => getData(e)} className="booking-list-btn">{destinationAirport}
                                <ul id="airport-destination-list"></ul>
                            </button>
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