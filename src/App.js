import React, { useState, useEffect } from 'react';

import Branding from './components/branding.component';
import GamesSection from './components/games-section.component';
import Features from './components/features.component';
import About from './components/about.component';
import SceneWrapper from './scene/scene-wrapper';
import { FetchWebsiteData, GetAppLink } from './utils/firebase.utils';

function App() {
    const [websiteData, setWebstiteData] = useState({});

    const features = websiteData.features || [];
    const games = websiteData.games || [];
    const social = websiteData.social || [];
    const appLink = websiteData.app_download_link;
    const about = websiteData.about || {};
    const screenshotLink = about.screenshot_link;
    const abouts = about.abouts || [];
    const logo = websiteData.logo;
    const companyName = websiteData.company_name;
    const baseUrl = websiteData.base_url;

    useEffect(() => {
        fetch();
    }, [])

    async function fetch() {
        const result = await FetchWebsiteData();
        setWebstiteData(result);
    }

    return (
        <SceneWrapper appLink={appLink} social={social} social={social} logo={logo} companyName={companyName} >
            <Branding appLink={appLink} baseUrl={baseUrl} />
            <GamesSection games={games} />
            <Features features={features} />
            <About appLink={appLink} screenshotLink={screenshotLink} abouts={abouts} />
        </SceneWrapper>
    )
}

export default App;