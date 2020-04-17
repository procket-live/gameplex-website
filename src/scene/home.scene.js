import React from 'react';

import Branding from '../components/branding.component';
import GamesSection from '../components/games-section.component';
import About from '../components/about.component';
import Features from '../components/features.component';

function HomeScene({ appLink, baseUrl, games, features, screenshotLink, abouts }) {
    return (
        <>
            <Branding appLink={appLink} baseUrl={baseUrl} />
            {/* <GamesSection games={games} /> */}
            <Features features={features} />
            <About appLink={appLink} screenshotLink={screenshotLink} abouts={abouts} />
        </>
    )
}

export default HomeScene;