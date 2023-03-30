import { useState, useEffect} from 'react';
import SearchIcon from '../imgs/search.png';
import axios from 'axios';

const SearchArea = () => {

    var routeData = [];

    useEffect(() => {
        axios.get('http://localhost:8000/flights')
        .then(res => {
            routeData = res.data;
        })
        .catch(err => document.getElementById('error-reasponse-data').innerHTML = `${err}`);
    }, []);

    const [search, setSearch] = useState("");

    const handleClick = (e) => {
        document.getElementById('top-search-field').style = "width: 375px"
    }

    const handleMouseLeave = (e) => {
        document.getElementById('top-search-field').style = "width: 250px";
    }

    const handleChange = (e) => {
        setSearch(e.target.value);

        for (let index = 0; index < routeData.length; index++) 
        {
            const route = routeData[index];
            if (route.departure_airport.toLowerCase().includes(search.toLowerCase()))
            {
                console.log(route.departure_airport);

                let li = document.createElement('li');
                li.innerHTML = `<p><strong>From:</strong></p>${route.departure_airport} 
                <p><strong>To:</strong></p> ${route.destination_airport} 
                <p><strong>Country:</strong></p> ${route.countries} 
                <p id="take-off-text" >Take off: </p> ${route.time}`;
            
                document.getElementById('search-response-list').appendChild(li);
            }
            else {
                return;
            }
        }
    }

    return ( 
        <div id='search-outer-container'>
            <div className="search-container">
                <input type="search" 
                        id='top-search-field'
                        value={search}
                        className="search-field-general"
                        placeholder="What are you looking for today?"
                        onClick={(e) => handleClick(e)}
                        onMouseLeave={(e) => handleMouseLeave(e)}
                        onChange={(e) => handleChange(e)}
                        / >
                <div id='search-response-container'>
                    <ul id='search-response-list'> 
                    </ul>
                </div>
                <button id='search-button'>
                    <img src={SearchIcon} width="20px" height="20px"></img>
                </button>
            </div>
        </div>
    );
}

export default SearchArea;