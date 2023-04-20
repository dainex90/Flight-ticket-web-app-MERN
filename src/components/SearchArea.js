import { useState, useEffect} from 'react';
import SearchIcon from '../imgs/search.png';
import axios from 'axios';

const SearchArea = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const routeDataParsed = [];

    
    var responseList =  document.getElementById("search-response-list");

    /* useEffect(() => 
    {
        axios.get('http://localhost:8000/flights')
        .then(res => {
            const routeData = res.data;
            routeDataParsed = JSON.parse(routeData);
        }
        )
        .catch(err => document.getElementsByClassName('error-response-data')[0].innerHTML = `${err}`)
    }, []);  */

    const travelSearch = (e) => {
    
        setSearchTerm(e.target.value);

        if (searchTerm == '') {
            for (let index = 0; index < responseList.childNodes.length; index++) {
                const li = responseList[index];
                responseList.removeChild(li)
            }
        }
        
        axios.get('http://localhost:8000/flights')
        .then(res => {
            res.data.filter(val => {
                if (searchTerm == '') {
                    return;
                }
                else if(val.departure_airport.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return (val);
                }
            }).map((val) => {
                
                const departureAirport = document.createElement('li');
                departureAirport.innerHTML = `${val.departure_airport}`;
                responseList.appendChild(departureAirport);
                }
        )}).catch(err => {
            console.log(err);
        })
    }
        return ( 
            <div id='search-outer-container'>
                <div className="search-container">
                    <input type="search" 
                            id='top-search-field'
                            value={searchTerm}
                            placeholder="What are you looking for today?"
                            onChange={e => {travelSearch(e)}}
                            / >
                    <button id='search-button'>
                        <img src={SearchIcon} width="20px" height="20px"></img>
                    </button>
                </div>
                <div id='search-response-container'>
                    <ul id='search-response-list'> 
    
                        <div className="error-response-data"></div>
                    </ul>
                </div>
            </div>
        );
    }
   


export default SearchArea;