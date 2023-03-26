import { useEffect } from "react";

function FooterLinks(props) {
    var key = 0;
    return (    
        <ul id="footer-links-container">
            <h1 id="footer-links-title"> {props.title} </h1>
            {props.links.map(link => {
                key++;
                return (<li className='footer-links' key={key}> {link}</li>)
            })}
        </ul>
     );
}

export default FooterLinks;