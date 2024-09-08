import React, { useContext } from 'react'
import './RightSection.css'
import Results from './Results/Results'
import InitualForme from './InitualForme/InitualForme'
import { ResultsOfMortgage } from '../../Calculator/Calculator';


const RightSection = () => {
  const {toClick} = useContext(ResultsOfMortgage)

  return (
    <div className='right-section'>
      <div className='dark-background'>
        {toClick ? <Results /> : <InitualForme />}
      </div>
    </div>
  )
}

export default RightSection