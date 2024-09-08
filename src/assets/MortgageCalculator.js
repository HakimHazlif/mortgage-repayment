export function mortgageCalculator(amount, term, interest){
  const interestMonth = Number(interest)/1200;
  const termMonth = Number(term) * 12;

  const monthlyInterest = (1+interestMonth)**termMonth;
  const topMonthlyInterest = interestMonth * monthlyInterest
  const downMonthlyInterest = monthlyInterest - 1;

  const monthlyPayment = (Number(amount) * topMonthlyInterest) / downMonthlyInterest

  return monthlyPayment;
}

export function totalRepayements(amount, term, interest){
  const monthlyPayment = mortgageCalculator(amount,term,interest);

  return monthlyPayment * (term * 12);
}

export function interestOnly(amount, term, interest) {
  const interestOnly = totalRepayements(amount,term,interest) - amount;

  return interestOnly;
}

export function monthlyInterestOnly(amount, term, interest) {
  const interestOnly = interestOnly(amount,term,interest) / 12;

  return interestOnly;
}

const amount = '300000';
const term = '25'
const interest = '5.25';

console.log(totalRepayements(amount,term,interest));
