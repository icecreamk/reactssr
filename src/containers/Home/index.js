import React from 'react'
import Header from '../../components/Header'

const Home = () => {
  
  return <div>
    <Header />
    <div onClick={() => {alert('11')}}>
      click
    </div>
  </div>
}

export default Home