import React from 'react';
import Axios from 'axios';

function About({ appLink, screenshotLink, abouts }) {
    return (
        <section className="jsx-3835746249 app-download-section mb-1">
            <div className="jsx-3835746249 container">
                <div className="jsx-3835746249 row py-5">
                    <div className="jsx-3835746249 col-md-5 text-center">
                        <img src={screenshotLink} className="jsx-3835746249 mobile-img" />
                    </div>
                    <div style={{ color: '#0d0d0d' }} className="jsx-3835746249 col-md-7 details">
                        <p className="jsx-3835746249 subtitle my-4">Download our app for exclusive features</p>
                        <ul className="jsx-3835746249 app-features d-none d-md-block p-0 my-4">
                            {
                                abouts.map((item, key) => (
                                    <li key={key} className="jsx-3835746249 my-3 jsx-3718240701 feature-desc">{item}</li>
                                ))
                            }
                        </ul>
                        <form method="get" className="jsx-3835746249">
                            <button onClick={() => {
                                // Axios.get(appLink);
                                window.open(appLink);
                            }} className="jsx-3835746249 btn btn-download btn-primary">Download Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About;
