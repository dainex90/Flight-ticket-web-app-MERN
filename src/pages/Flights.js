import { ErrorResponse } from "@remix-run/router";
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
                li.innerHTML = `<p><strong>From:</strong></p>${route.departure_airport} <p><strong>To:</strong></p> ${route.destination_airport} <p><strong>Country:</strong></p> ${route.countries} <p id="take-off-text" >Take off: </p> ${route.time}`;

                document.getElementById('allflights-response-data').appendChild(li);
            }
        })
        .catch(err => {
            document.getElementsByClassName('error-response-data')[0].innerHTML = `Obs, something went wrong! <br><br><strong>${err}`
        });
    }, []);


    return ( 
        <div className='page-content'>
            < SideNavbar />
            <div className="inner-page-content">
                <label className="main-header">Incoming Flights
                    <div id="all-flights-container">
                        <ul id="allflights-response-data">
                        </ul>
                        <div className="error-response-data"></div>
                    </div>
                </label>
            </div>
        </div>
     );
}

export default Flights;