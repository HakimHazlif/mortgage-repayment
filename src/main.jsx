import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import ResultsOfMortgageProvider from './Calculator/Calculator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ResultsOfMortgageProvider>
      <App />
    </ResultsOfMortgageProvider>
  </BrowserRouter>
)
