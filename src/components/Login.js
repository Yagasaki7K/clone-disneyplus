import React from 'react'
import Advertise from './Advertise'
import Banner from './Banner'
import Devices from './Devices'
import DownloadNow from './DownloadNow'
import Footer from './Footer'
import GridTheme from './GridTheme'
import GroupWatch from './GroupWatch'
import Main from './MainDetails'
import MarvelStudio from './MarvelStudio'
import Stream from './Stream'

const Login = () => {
    return (
        <>
            <Main>
                <Banner/>
                <Stream/>
                <GroupWatch/>
                <MarvelStudio/>
                <GridTheme/>
                <DownloadNow/>
                <Advertise/>
                <Devices/>
                <Footer/>
            </Main>
        </>
    )
}

export default Login
