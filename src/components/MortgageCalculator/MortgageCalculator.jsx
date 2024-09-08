import React from 'react'
import './MortgageCalculator.css'
import LeftSection from '../LeftSection/LeftSection'
import RightSection from '../RightSection/RightSection'


const MortgageCalculator = () => {
  return (
    <div className='mortgage-main'>
      <LeftSection />
      <RightSection />
    </div>
  )
}

export default MortgageCalculator