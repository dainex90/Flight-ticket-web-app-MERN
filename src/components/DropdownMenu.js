import { useEffect } from 'react';
import DropDownArrow from '../imgs/drop-down-arrow.png';

function DropdownMenu(props) {

    var key = 0;
/*     useEffect(() => {
            const dropdownContainer = document.getElementById('dropdown-content');
            props.content.map(link => {
                const li = document.createElement('li');
                li.innerHTML = link;
                dropdownContainer.appendChild(li);
            })
    }, [])
    
 */
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
                {props.content.map(link => {
                        key ++;
                        return <li key={key}> {link} </li>
                    })} 
                </ul>
        </li>
     );
    
}

export default DropdownMenu;