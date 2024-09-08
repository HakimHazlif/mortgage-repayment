import React, { useState, createContext } from 'react'

class Calculator{
  amount;
  term;
  interest;

  constructor(amount, term, interest){
    this.amount = amount;
    this.term = term;
    this.interest = interest;
  }
  
  monthlyRepayements(){
    const interestMonth = Number(this.interest)/1200;
    const termMonth = Number(this.term) * 12;

    const monthlyInterest = (1+interestMonth)**termMonth;
    const topMonthlyInterest = interestMonth * monthlyInterest
    const downMonthlyInterest = monthlyInterest - 1;

    const monthlyPayment = (Number(this.amount) * topMonthlyInterest) / downMonthlyInterest

    return monthlyPayment;
  }

  totalRepayements(){
    const monthlyPayment = this.monthlyRepayements();

    return monthlyPayment * (this.term * 12);
  }

  interestOnly() {
    const interestOnly = this.totalRepayements();

    return interestOnly - this.amount;
  }

  monthlyInterestOnly() {
    const interestOnly = this.interestOnly();

    return interestOnly / (this.term*12);
  }
}


export const ResultsOfMortgage = createContext(null)

const ResultsOfMortgageProvider = (props) => {
  const [isSelect, setIsSelect] = useState('');
  const [toClick, setToClick] = useState(false);

  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [interest, setInterest] = useState('');


  const values = new Calculator(amount,term,interest);

  const store ={
    toClick,
    setToClick,
    isSelect,
    setIsSelect,
    amount,
    setAmount,
    term,
    setTerm,
    interest,
    setInterest,
    monthlyRepay: values.monthlyRepayements().toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    totalRepay: values.totalRepayements().toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    monthlyInterest: values.monthlyInterestOnly().toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    totalInterest: values.interestOnly().toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <ResultsOfMortgage.Provider value={store}>
      {props.children}
    </ResultsOfMortgage.Provider>
  )
}

export default ResultsOfMortgageProvider






