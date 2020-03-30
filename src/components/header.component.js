import React from 'react';

function Header({ appLink, logo }) {
    return (
        <nav style={{ boxShadow: 'rgba(0,0,0,.2) 3px 5px 5px' }} className="jsx-562014102 navbar fixed-top bg-dark py-0">
            <div className="jsx-562014102 container d-flex justify-content-between px-0">
                <a href="/" className="jsx-562014102 brand navbar-brand m-0">
                    {
                        logo ?
                            <img style={{ width: 180, height: 70 }} src={logo} alt="gamingmonk-logo" className="jsx-562014102 logo" />
                            : null
                    }
                </a>
                <div className="jsx-562014102">
                    <form method="get" className="jsx-562014102 d-none d-md-inline mr-1">
                        <button onClick={() => {
                            window.open(appLink);
                        }} className="jsx-562014102 btn text-subtle btn-signin px-0 py-1">
                            <span className="jsx-562014102 d-none d-md-inline px-2">Download App</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header;