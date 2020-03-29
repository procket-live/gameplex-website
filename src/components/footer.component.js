import React from 'react';

function Footer({ social, logo, companyName }) {
    return (
        <div className="jsx-3801794385 footer">
            <div className="jsx-3801794385">
                <div className="jsx-3801794385 py-custom">
                    <div className="jsx-3801794385 d-none d-md-block text-center">
                        <a href="/" className="jsx-3801794385">
                            <img src={logo} alt="gameplex-logo" className="jsx-3801794385 logo" />
                        </a>
                    </div>
                    {/* <div className="jsx-2147387680 links-wrapper row justify-content-center">
                        <ul className="jsx-2147387680 footer-links p-0 py-3 m-0">
                            <li className="jsx-2147387680 px-3 my-3 separator-right"><a href="/about" className="jsx-2147387680">About</a></li>
                            <li className="jsx-2147387680 px-3 my-3 separator-right"><a href="/careers" className="jsx-2147387680">Careers</a></li>
                            <li className="jsx-2147387680 px-3 my-3 separator-right"><a href="/terms" className="jsx-2147387680">Terms of Use</a></li>
                            <li className="jsx-2147387680 px-3 my-3 separator-right"><a href="https://help.gamingmonk.com/en/" className="jsx-2147387680">FAQs / Help</a></li>
                            <li className="jsx-2147387680 px-3 my-3"><a href="/privacy-policy" className="jsx-2147387680">Privacy
                  Policy</a></li>
                        </ul>
                    </div> */}
                    <div className="jsx-3801794385 d-block d-md-none text-center my-4">
                        <a href="/" className="jsx-3801794385"><img src="./images/logo.svg" alt="gameplex-logo" className="jsx-3801794385 logo" /></a>
                    </div>
                    <ul className="jsx-2785336266 social-links d-flex justify-content-center p-0 m-custom">
                        {
                            social.map((item = {}) => {
                                return (
                                    <li className="jsx-2785336266 mx-3">
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
