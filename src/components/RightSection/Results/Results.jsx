import React, { useContext } from 'react'
import './Results.css'
import { ResultsOfMortgage } from '../../../Calculator/Calculator';

export const RepaymentResults = () => {
  const {monthlyRepay, totalRepay} = useContext(ResultsOfMortgage)

  return (
    <>
      <div className="monthly-result">
        <p>Your monthly repayments</p>
        <div className='result-value'>
          ${monthlyRepay}
        </div>
      </div>
      <div className='line'>
        <hr />
      </div>
      <div className="total-repay">
        <p>Total you'll repay over the term</p>
        <div className="repay-value">
          ${totalRepay}
        </div>
      </div>
    </>
  )
}

export const InterestOnlyResults = () => {
  const {monthlyInterest, totalInterest} = useContext(ResultsOfMortgage)

  return (
    <>
      <div className="monthly-result">
        <p>Your monthly interests only</p>
        <div className='result-value'>
          ${monthlyInterest}
        </div>
      </div>
      <div className='line'>
        <hr />
      </div>
      <div className="total-repay">
        <p>Total you'll repay over the term as interest</p>
        <div className="repay-value">
          ${totalInterest}
        </div>
      </div>
    </>
  )
}

const Results = () => {
  const {isSelect} = useContext(ResultsOfMortgage)

  return (
    <div className='results'>
      <div className='info'>
        <h3>Your results</h3>
        <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
      </div>
      <div className='results-box'>
        {isSelect === 'interest-option' ? <InterestOnlyResults /> : <RepaymentResults />}
      </div>
    </div>
  )
}

export default Results