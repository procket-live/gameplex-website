import React from 'react';
import {
    Link,
} from "react-router-dom";

function Footer({ social, logo, companyName }) {
    return (
        <div className="jsx-3801794385 footer">
            <div className="jsx-3801794385">
                <div className="jsx-3801794385 py-custom">
                    <div className="jsx-3801794385 d-none d-md-block text-center">
                        <a href="/" className="jsx-3801794385">
                            {
                                logo ?
                                    <img style={{ height: 40, overflow: 'hidden' }} src={logo} alt="gameplex-logo" className="jsx-562014102 logo" />
                                    : null
                            }
                        </a>
                    </div>
                    <div className="jsx-2147387680 links-wrapper row justify-content-center">
                        <ul className="jsx-2147387680 footer-links p-0 py-3 m-0">
                            <li className="jsx-2147387680 px-3 my-3 separator-right"><Link className="jsx-2147387680" to="/about">About</Link></li>
                            <li className="jsx-2147387680 px-3 my-3 separator-right"><a href="https://www.termsandconditionsgenerator.com/live.php?token=KpAY38T1omPltvNzNMUqW4GRVbx2RFyu" className="jsx-2147387680">Terms of Use</a></li>
                            <li className="jsx-2147387680 px-3 my-3 separator-right"><a href="https://www.termsandconditionsgenerator.com/live.php?token=KpAY38T1omPltvNzNMUqW4GRVbx2RFyu" className="jsx-2147387680">FAQs / Help</a></li>
                            <li className="jsx-2147387680 px-3 my-3"><a href="https://www.termsandconditionsgenerator.com/live.php?token=KpAY38T1omPltvNzNMUqW4GRVbx2RFyu" className="jsx-2147387680">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <ul className="jsx-2785336266 social-links d-flex justify-content-center p-0 m-custom">
                        {
                            social.map((item = {}, key) => {
                                return (
                                    <li key={key} className="jsx-2785336266 mx-3">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="jsx-2785336266 icon-link">
                                            <img src={item.icon} className="jsx-2785336266 icon" />
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="jsx-3801794385 footer-bottom">
                <div className="jsx-3801794385 footer-text text-center footer-py-custom">
                    {companyName}
                </div>
            </div>
        </div>
    )
}

export default Footer;
