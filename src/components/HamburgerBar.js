import HamburgerImg from '../imgs/Hamburger_img.png';
import SearchArea from './SearchArea';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function HamburgerBar() {

    const [isClicked, setIsClicked] = useState(false);
     // e handlers
     const toggleContent = (e) => {
        // Show the hamburger content
        if (!isClicked) {
            document.getElementById('hamburger-container').style.display = "flex";
            document.getElementById('hamburger-container').style.animation = "hamburger-slide 0.75s 0s 1 alternate";
                setIsClicked(true);
        }
        else {
            // Hide the hamburger content
            document.getElementById('hamburger-container').style.display = "none";
            document.getElementById('hamburger-container').style.animation = "hamburger-slide 0.75s 0s 1 alternate-reverse";
            setIsClicked(false);
        }
     }

    return ( 
        <div id='hamburger-all-content'>
            <img src={HamburgerImg} id="hamburger-button" width="30px" height="30px" onClick={e => toggleContent(e)} />
            <div id='hamburger-container'>
                <nav>
                    <li> 
                        <ul id='hamburger-content'>
                            <li className="login-link-special" onClick={e => toggleContent(e)}>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <SearchArea />
                            </li>
                        </ul>
                    </li>
                </nav>
            </div>
        </div>
         
);
}

export default HamburgerBar;