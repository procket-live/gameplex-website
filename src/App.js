import React from 'react';

import Branding from './components/branding.component';
import GamesSection from './components/games-section.component';
import Features from './components/features.component';
import About from './components/about.component';
import SceneWrapper from './scene/scene-wrapper';

function App() {
    return (
        <SceneWrapper >
            <Branding />
            <GamesSection />
            <Features />
            <About />
        </SceneWrapper>
    )
}

export default App;