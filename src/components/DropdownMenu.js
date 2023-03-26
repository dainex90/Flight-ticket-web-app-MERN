import DropDownArrow from '../imgs/drop-down-arrow.png';

function DropdownMenu(props) {

    if (props.type === "side-navbar")
    {
        return ( 
            <li className="dropdown"> 
                <span style={{display: 'flex', justifyContent: 'center'}}> {props.title} 
                <img src={DropDownArrow} width="25px" height='25px'></img>
                </span>
                    <ul className="dropdown-content">
                        <li className="list-item">All Flights</li>
                        <li className="list-item">Booking</li>
                        <li className="list-item">Living</li>
                        <li className="list-item">Explore</li>    
                    </ul>
            </li>
         );
    }
    return ( 
        <li className="dropdown navbar-links" id='top-dropdown'> 
            {props.title} 
            <img style={{position: 'relative', top: '8px'}} src={DropDownArrow} width="25px" height='25px'></img>
                <ul className="dropdown-content">
                    <li className="list-item">All Flights</li>
                    <li className="list-item">Booking</li>
                    <li className="list-item">Living</li>
                    <li className="list-item">Explore</li>    
                </ul>
        </li>
     );
    
}

export default DropdownMenu;