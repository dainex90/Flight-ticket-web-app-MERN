function Footer() {
    return (  
        <footer id="footer-container">

            <div style={{backgroundColor: 'rgb(35, 40, 47)', padding: '50px', textAlign: 'center'}}>
                Copyright @ BuzzAir . All responsibilities ordered @ owner.
            </div>

            <div id="footer-bottom-container">
                <div> <strong><span style={{fontSize: 'large'}}>Channels</span></strong>
                    <ul id="footer-links-container">
                        <li>
                            <a href="">StackOverflow</a>
                        </li>
                        <li>
                            <a href="">GitHub</a>
                        </li>
                        <li>
                            <a href="">Instagram</a>
                        </li>
                        <li>
                            <a href="">Tumblr</a>
                        </li>
                        <li>
                            <a href="">Facebook</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;