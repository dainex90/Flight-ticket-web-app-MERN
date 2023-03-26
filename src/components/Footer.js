import FooterLinks from '../components/FooterLinks';

function Footer() {

    const buzzAirLinks = ["About", "Working With us", "Terms of Conduct", "Policies", "FacebookLOL"];
    const channelLinks = ["Stack Overflow", "Github", "Axios Http", "Instagram"];
    return (  
        <footer id="footer-container">
            <div style={{backgroundColor: 'rgb(35, 40, 47)', padding: '50px', textAlign: 'center'}}>
                Copyright @  _ is a trademark of Buzzair. All other trademarks and trade names are the property of their respective owners .
            </div>
            <div id="footer-bottom-container">
                <FooterLinks title="BuzzAir" links={buzzAirLinks}/>
                <FooterLinks title="Channels" links={channelLinks}/>
            </div>
        </footer>
    );
}

export default Footer;