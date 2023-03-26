import { useEffect } from "react";

function FooterLinks(props) {

    useEffect(() => {
        props.links.map(link => {
            console.log(link);
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.innerHTML = link;
            
            li.appendChild(a);
            li.setAttribute('class', 'footer-links');
            document.getElementById('footer-links-container').appendChild(li);
        })
    }, []);
  
    return (
        <ul id="footer-links-container">
            <h1 id="footer-links-title"> {props.title} </h1>
        </ul>
     );
}

export default FooterLinks;