import FooterLinks from '../components/FooterLinks';

function Footer() {

    // Internal links
    const buzzAirLinks = ["About", "Working With us", "explore", "Find us"];
    const policyLinks = ["Terms of Service", "Acknowledgements", "Copyright", "Internal Laws"]
    // External links
    const channelLinks = ["Stack Overflow", "Github", "Axios Http", "Instagram", "Facebook", "TikTok"];
    const socialLinks = ["Twitter", "WhatsApp", "Slack", "Discord", "Skype", "Teams"];
    return (  
        <footer id="footer-container">
            <div style={{backgroundColor: 'rgb(35, 40, 47)', padding: '50px', textAlign: 'center'}}>
                Copyright @  _ is a trademark of Buzzair. All other trademarks and trade names are the property of their respective owners .
            </div>
            <div id="footer-bottom-container">
                    <FooterLinks title="BuzzAir" links={buzzAirLinks}/>
                    <FooterLinks title="Channels" links={channelLinks}/>
                    <FooterLinks title="Policy" links={policyLinks}/>
                    <FooterLinks title="Social" links={socialLinks}/>
            </div>
        </footer>
    );
}

export default Footer;