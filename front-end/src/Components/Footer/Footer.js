import React, { Component } from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="footer" className="footer">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <span className="copyright">Copyright ©<span className="msgTxt">goutamsingh.com</span></span>
                </div>
                <div className="col-md-4">
                    <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                            <a rel="noopener noreferrer" href="https://twitter.com/glamour_gleam" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a rel="noopener noreferrer" href="https://www.facebook.com/glamourgleam" target="_blank">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/goutampsingh/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a rel="noopener noreferrer" href="https://www.instagram.com/_gautamsingh/" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <div className="col-md-4">
                    <ul className="list-inline quicklinks">
                        <li className="list-inline-item">
                            <a rel="noopener noreferrer" href="/#">Privacy Policy</a>
                        </li>
                        <li className="list-inline-item">
                            <a rel="noopener noreferrer" href="/#">Terms of Use</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
        </div>
         );
    }
}
 
export default Footer;