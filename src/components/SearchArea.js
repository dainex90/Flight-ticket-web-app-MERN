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
        .catch(err => console.log(err));
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
        routeData.filter(item => {
                if (item.departure_airport.toUpperCase().includes(search.toUpperCase())){
                    console.log(item.departure_airport);
                    document.getElementById('search-response-list').innerHTML = `${item.departure_airport}`;
                }
            })
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
            </div>
            <button>
                <img src={SearchIcon} width="20px" height="20px"></img>
            </button>
        </div>
    );
}

export default SearchArea;