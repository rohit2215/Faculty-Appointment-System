import React from 'react'
import Header from '../componenets/Header'
import SpecialityMenu from '../componenets/SpecialityMenu'
import TopDoctors from '../componenets/TopDoctors'
import Banner from '../componenets/Banner'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors /> 
      <Banner />
    </div>
  )
}

export default Home