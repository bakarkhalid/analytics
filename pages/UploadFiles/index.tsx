import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header'
import Mainn from '@/Components/Mainn'
import SideBar from '@/Components/SideBar'
import React from 'react'

const UploadFiles = () => {
    
    return (
        <div className='upload-files'>
            <Header isLogged />
            <div className='main-area'>
                <SideBar sideBarName='Welcome back @username' uploadFile='Upload' searchArea='Search' analyticsArea='Analytics' />
                <Mainn />
            </div>
            <Footer />
        </div>
    )
}

export default UploadFiles