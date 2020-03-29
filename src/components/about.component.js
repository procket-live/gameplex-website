import React from 'react';

function About() {
    return (
        <section className="jsx-3835746249 app-download-section mb-1">
            <div className="jsx-3835746249 container">
                <div className="jsx-3835746249 row py-5">
                    <div className="jsx-3835746249 col-md-5 text-center">
                        <img src="https://cdn.gamingmonk.com/home-page/mobile.png" className="jsx-3835746249 mobile-img" />
                    </div>
                    <div style={{ color: '#0d0d0d' }} className="jsx-3835746249 col-md-7 details">
                        <p class="jsx-3835746249 subtitle my-4">Download our app for exclusive
      features<p />
                            <ul className="jsx-3835746249 app-features d-none d-md-block p-0 my-4">
                                <li className="jsx-3835746249 my-3 jsx-3718240701 feature-desc"> - Live stream your gameplay in just one click, directly
          from your phone.</li>
                                <li className="jsx-3835746249 my-3 jsx-3718240701 feature-desc"> - Invite your followers to join you on GamingMonk, and
          follow other gamers.</li>
                                <li className="jsx-3835746249 my-3 jsx-3718240701 feature-desc"> - Find everything on the tip of your fingers.
                                Click-and-go!
        </li>
                            </ul>
                            <form method="get" action="https://gamingmonk.sgp1.cdn.digitaloceanspaces.com/gamingmonk.apk" className="jsx-3835746249">
                                <button className="jsx-3835746249 btn btn-download btn-primary">Download Now</button>
                            </form>
                        </p ></div>
                </div>
            </div>
        </section>
    )
}

export default About;
