import React, { useContext, useRef, useState } from 'react'
import './LeftSection.css'
import { ResultsOfMortgage } from '../../Calculator/Calculator';


const LeftSection = () => {
  const [isFocus, setIsFocus] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const amountRef = useRef(null)
  const termRef = useRef(null)
  const interestRef = useRef(null)

  const {
    toClick,
    setToClick,
    isSelect,
    setIsSelect,
    setAmount,
    setTerm,
    setInterest
  } = useContext(ResultsOfMortgage)

  function removeInputFields() {
    if (amountRef.current){
      amountRef.current.value = '';
    }
    if (termRef.current){
      termRef.current.value = '';
    }
    if (interestRef.current){
      interestRef.current.value = '';
    }
    setIsSelect('');
    setToClick(false)
    setIsEmpty(false)
  }

  function inputFieldCheck(){
    if (termRef.current.value !== '' && amountRef.current.value !== '' && interestRef.current.value !== '' && isSelect !== ''){
      setToClick(true)
      setIsEmpty(false)
    }

    if (termRef.current.value === '' || amountRef.current.value === '' || interestRef.current.value === '' || isSelect === ''){
      setToClick(false)
      setIsEmpty(true)
    } 
  }

  function fieldsIsImpty(ref){
    if (isEmpty && ref.current.value === ''){
      return {display:'inline-block'}
    } else {
      return {display:'none'}
    }
  }

  function yellowOrRed(name, ref){
    if (isFocus === name && !isEmpty) {
      return 'yellow-label-focus'
    } else if (ref.current.value === '' && isEmpty){
      return 'red-label-focus'
    } else {
      return ''
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
      <div className='left-section'>
        <div className="top-leftest">
          <h2>Mortgage Calculatore</h2>
          <u onClick={()=>{removeInputFields()}}>Clear All</u>
        </div>
        <form onSubmit={handleSubmit} className="input-fields">
          <div className="amount-field">
            <h3>Mortgage Amount</h3>
            <label htmlFor="mortage-amount" 
            className={(isFocus === 'mortage-amount' ? 'label-focus' : '')}>
              <p>$</p>
              <input type="text" name='mortage-amount' onChange={(e)=>setAmount(e.target.value)} onFocus={()=>{setIsFocus('mortage-amount')}} onBlur={()=>{setIsFocus('')}} ref={amountRef}/>
            </label>
            <p className='requered' style={fieldsIsImpty(amountRef)}>This field is requered</p>
          </div>
            <div className="seconds-input-fields">
              <div className="term-field">
                <h3>Mortgage term</h3>
                <label htmlFor="mortage-term" className={isFocus === 'mortage-term' ? 'label-focus' : ''}>
                  <input type="text" name='mortage-term' onChange={(e)=>setTerm(e.target.value)} onFocus={()=>{setIsFocus('mortage-term')}} onBlur={()=>{setIsFocus('')}} ref={termRef}/>
                  <p>years</p>
                </label>
                <p className='requered' style={fieldsIsImpty(termRef)}>This field is requered</p>
              </div>
              <div className="rate-field">
                <h3>Interest Rate</h3>
                <label htmlFor="interest-rate" className={isFocus === 'interest-rate' ? 'label-focus' : ''}>
                  <input type="text" name="interest-rate" onChange={(e)=>setInterest(e.target.value)} onFocus={()=>{setIsFocus('interest-rate')}} onBlur={()=>{setIsFocus('')}} ref={interestRef}/>
                  <p>%</p>
                </label>
                <p className='requered' style={fieldsIsImpty(interestRef)}>This field is requered</p>
              </div>
            </div>
          <div className="thirds-input-fields">
            <h3>Mortgage Type</h3>
            <div className='thirds-inputs'>
              <label htmlFor="repayment-option" className={isSelect === 'repayment-option' ? 'label-focus' : ''}>
                <input type='radio' value='repayment-option' checked={isSelect === 'repayment-option'}  onChange={()=>setIsSelect('repayment-option')} />
                <p>Repayment</p>
              </label>
              <label htmlFor="interest-only" className={isSelect === 'interest-option' ? 'label-focus' : ''}>
                <input type="radio" value="interest-option" checked={isSelect === 'interest-option'}  onChange={()=>setIsSelect('interest-option')}/>
                <p>Interest Only</p>
              </label>
            </div>
            <p className='requered' style={isEmpty && isSelect === '' ?  {display:'inline-block'} : {display:'none'} }>This field is requered</p>
          </div>
        </form>
        <button className='calculate-button' onClick={()=>inputFieldCheck()}>
          <img src="src/assets/images/icon-calculator.svg" alt="no"/>
          <p>Calculate Repayments</p>
        </button>
      </div>
  )
}

export default LeftSection
