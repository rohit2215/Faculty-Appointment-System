import React from 'react'
import Header from '../componenets/Header'
import SpecialityMenu from '../componenets/SpecialityMenu'
import TopDoctors from '../componenets/TopDoctors'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors/> 
    </div>
  )
}

export default Home