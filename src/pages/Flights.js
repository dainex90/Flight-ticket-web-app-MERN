import axios from "axios";
import { useEffect } from "react";
import SideNavbar from "../components/SideNavbar";

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
            < SideNavbar />
            <div className="inner-page-content">
                <label className="main-header">Incoming Flights
                    <div id="all-flights-container">
                        <ul id="response-data">
                        </ul>
                        <div id="error-response-data"> 
                        </div>
                    </div>
                </label>
            </div>
        </div>
     );
}

export default Flights;