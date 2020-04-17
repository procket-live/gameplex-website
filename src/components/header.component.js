import React from 'react';
import Axios from 'axios';
import {
    Link,
} from "react-router-dom";

function Header({ appLink, logo }) {
    return (
        <nav style={{ boxShadow: 'rgba(0,0,0,.2) 3px 5px 5px', height: 70 }} className="jsx-562014102 navbar fixed-top bg-dark py-0">
            <div className="jsx-562014102 container d-flex justify-content-between px-0">
                <Link to="/" className="jsx-562014102 brand navbar-brand m-0">
                    {
                        logo ?
                            <img style={{ height: 40, overflow: 'hidden' }} src={logo} alt="gameplex-logo" className="jsx-562014102 logo" />
                            : null
                    }
                </Link>
                <div className="jsx-562014102">
                    <form method="get" className="jsx-562014102 d-none d-md-inline mr-1">
                        <button onClick={() => {
                            window.open(appLink, '_system');

                            return false;
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