import React, {Component} from 'react';
import './footer.css';


class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="footer__first">
                    <h1>Logo</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
                <div className="footer__second">
                    <h2>Useful Links</h2>
                    <ul className="lists">
                        <li>home</li>
                        <li>about us</li>
                        <li>product</li>
                        <li>gallery</li>
                        <li>r & d</li>
                        <li>contact us</li>
                        <li>track order</li>
                    </ul>
                </div>

                <div className="footer__third">
                    <h2>Social Media</h2>
                    <ul className="lists">
                        <li>facebook</li>
                        <li>twitter</li>
                        <li>instagram</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;