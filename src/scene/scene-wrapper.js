import React from 'react'
import Header from '../components/header.component'
import Footer from '../components/footer.component'
import Cookies from '../components/cookies.component'

function SceneWrapper({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <Cookies />
        </>
    )
}

export default SceneWrapper;