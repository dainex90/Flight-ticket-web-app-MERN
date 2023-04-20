
import { useSelector } from 'react-redux';
import DropDownArrow from '../imgs/drop-down-arrow.png';
import { Link } from 'react-router-dom';

function DropdownMenu(props) {

    const { loggedIn } = useSelector(state => state.user);
    var key = 0;
    if (props.type === "side-navbar")
    {
        return ( 
            <li className="dropdown"> 
                <span>{props.title}  
                <img style={{position: 'relative', top: '8px'}} src={DropDownArrow} width="25px" height='25px'></img>
                </span> 
                    <ul className="dropdown-content">  
                    {props.content.map(link => {
                        key ++;
                        return <li key={key}>{link} </li>
                    })} 
                    </ul>
            </li>
         );
    }
    return ( 
        <li className="dropdown navbar-links" id='top-dropdown'> 
            {props.title} 
            <img style={{position: 'relative', top: '8px'}} src={DropDownArrow} width="25px" height='25px'></img>
                <ul className="dropdown-content">  
                {   
                    props.content.filter(link => {
                        if (!loggedIn && link === "Settings") {
                            console.log(link);
                            return;
                        }
                        return link;
                    }).map(link => {
                    key ++;
                    return <li key={key}> <Link to={`/${link.toLowerCase()}`}>{link}</Link> </li>
                    })} 
                </ul>
        </li>
     );
    
}

export default DropdownMenu;