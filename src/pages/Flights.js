import axios from "axios";
import { useEffect } from "react";

function Flights() {

    // Getting all the flight routes
    useEffect(() => {
        axios.get('http://localhost:8000/flights')
        .then(res => {
            for (let index = 0; index < res.data.length; index++) {
                const route = res.data[index];
                let li = document.createElement('li');
                li.innerHTML = `<p><strong>From:</strong></p>${route.departure_airport} <p><strong>To:</strong></p> ${route.destination_airport} <p><strong>Country:</strong></p> ${route.countries} <p><span style={{color: 'red'}}>Taking off:</span></p> ${route.time}`;

                document.getElementById('response-data').appendChild(li);
            }
        })
        .catch(err => {
            document.getElementById('error-response-data').innerHTML = `Obs, something went wrong! <br><br><strong>${err}`
        });
    }, []);


    return ( 
        <div className='page-content'>  
            <h1 className="main-header">Incoming Flights</h1>
                <div id="all-flights-container">
                    <ul id="response-data">
                    </ul>
                    <div id="error-response-data"> 
                    </div>
                </div>
        </div>
     );
}

export default Flights;