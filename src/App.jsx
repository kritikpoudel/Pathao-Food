import React from 'react'
import HeroSection from './components/HeroSection'
import OrderSection from './components/OrderSection'
import FeaturesSection from './components/FeaturesSection'
import Gold from './components/Gold'
import Company from './components/Company'
import Download from './components/Download'

const App = () => {
  return (
    <div className='relative w-screen h-screen'>
      <HeroSection/>
      <OrderSection/>
      <FeaturesSection/>
      <Gold/>
      <Company/>
      <Download/>
    </div>
  )
}

export default App