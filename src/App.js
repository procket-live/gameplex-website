import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import SceneWrapper from './scene/scene-wrapper';
import { FetchWebsiteData, GetDownloadURL } from './utils/firebase.utils';

import HomeScene from './scene/home.scene';
import NotFoundScene from './scene/noMatch.scene';
import AboutScene from './scene/about.scene';

function App() {
    const [websiteData, setWebstiteData] = useState({});

    const features = websiteData.features || [];
    const games = websiteData.games || [];
    const social = websiteData.social || [];
    const appPath = websiteData.app_path;
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
        console.log('result.app_path', result.app_path)
        const url = await GetDownloadURL(result.app_path);
        console.log('url', url);
        result.app_download_link = url;
        setWebstiteData(result);
    }

    return (
        <Router>
            <SceneWrapper appLink={appLink} social={social} social={social} logo={logo} companyName={companyName} >
                <Switch>
                    <Route exact path="/">
                        <HomeScene
                            appLink={appLink}
                            baseUrl={baseUrl}
                            games={games}
                            features={features}
                            screenshotLink={screenshotLink}
                            abouts={abouts}
                        />
                    </Route>
                    <Route path="/about">
                        <AboutScene />
                    </Route>
                    <Route path="*">
                        <NotFoundScene />
                    </Route>
                </Switch>
            </SceneWrapper>
        </Router>
    )
}

export default App;