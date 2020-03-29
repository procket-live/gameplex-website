import React from 'react';

function Branding() {
    return (
        <div className="jsx-3586416327 banner">
            <div className="jsx-3586416327 banner-content container text-center">
                <h1 className="jsx-3586416327 heading my-5">INDIA’S LARGEST <br className="jsx-3586416327" /> GAMING COMMUNITY
                    </h1>
                <p className="jsx-3586416327 subtitle my-5">Participate in tournaments, watch livestreams, <br className="jsx-3586416327" />chat with other gamers, discover content and a lot more!</p>
                <form method="get" action="https://gamingmonk.sgp1.cdn.digitaloceanspaces.com/gamingmonk.apk" className="jsx-3586416327 d-md-none">
                    <button className="jsx-3586416327 btn btn-download btn-primary">Download App</button>
                </form>
                <form className="jsx-3586416327 d-none d-md-block">
                    <label className="jsx-3586416327">Enter your mobile number to receive the app download link</label>
                    <div className="jsx-3586416327 input-wrap d-flex justify-content-between rounded p-2 m-auto">
                        <input type="number" placeholder="Enter Mobile number" defaultValue required className="jsx-3586416327 mobile-input flex-grow-1 border-0 px-2 mr-3" /><button className="jsx-3586416327 btn btn-send btn-primary text-capitalize">Send Link</button>
                    </div>
                </form>
                <div className="jsx-3586416327 alert alert-success alert-dismissible fade show p-2 m-0 hide-msg">
                    App download link sent to +91 <b className="jsx-3586416327" /> successfully!<button type="button" className="jsx-3586416327 close p-2"><span aria-hidden="true" className="jsx-3586416327">×</span></button>
                </div>
            </div>
        </div>
    )
}

export default Branding;