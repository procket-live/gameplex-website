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

    const isInApp = InApp();
    console.log('isInApp', isInApp)
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

    function InApp(ua = window.navigator.userAgent || window.navigator.vendor || window.opera) {
        var rules = [
            'WebView',
            '(iPhone|iPod|iPad)(?!.*Safari\/)',
            'Android.*(wv|\.0\.0\.0)',
            'Instagram'
        ];

        var regex = new RegExp('(' + rules.join('|') + ')', 'ig');
        return Boolean(ua.match(regex));
    }

    async function fetch() {
        const result = await FetchWebsiteData();
        const url = await GetDownloadURL(result.app_path);
        result.app_download_link = url;
        setWebstiteData(result);
    }

    return (
        <Router>
            <SceneWrapper appLink={appLink} social={social} social={social} logo={logo} companyName={companyName} >
                <Switch>
                    <Route exact path="/">
                        <HomeScene
                            isInApp={isInApp}
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