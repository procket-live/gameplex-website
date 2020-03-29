import React from 'react'
import Header from '../components/header.component'
import Footer from '../components/footer.component'
import Cookies from '../components/cookies.component'

function SceneWrapper({ children, appLink, social, logo, companyName }) {
    return (
        <>
            <Header appLink={appLink} logo={logo} />
            {children}
            <Footer social={social} logo={logo} companyName={companyName} />
            <Cookies />
        </>
    )
}

export default SceneWrapper;