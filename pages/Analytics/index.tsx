import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header';
import SideBar from '@/Components/SideBar';
import React from 'react'

const Analytics = () => {
  return (
    <div className=''>
      <Header isLogged />
      <div className='main-area'>
        <SideBar sideBarName='Welcome back @username' uploadFile='Upload' searchArea='Search' analyticsArea='Analytics' />
      </div>
      <Footer />
    </div>
  )
}

export default Analytics;