import React from 'react'
import './InitualForme.css'

const InitualForme = () => {
  return (
    <div className='initual-form'>
      <div>
        <img src="src/assets/images/illustration-empty.svg" alt="" />
      </div>
      <div className="sentences">
        <h3 className='sentences-title'>Results shown here</h3>
        <p>Complete the form and click "Calculate Repayments" to see what your monthly repayments would be.</p>
      </div>
    </div>
  )
}

export default InitualForme