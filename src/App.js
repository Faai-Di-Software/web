import './App.css';
import TransactionTable from './components/transactions/TransactionTable';
import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [transactions, setTransactions] = useState([
    /* Default values here */
    {id: 1, date: "12-02-21", description: "transaction1", amount: 4},
    {id: 2, date: "12-03-21", description: "transaction2", amount: 12}
  ]) // Object destructuring

  useEffect(() => {
    // make request here
  })


  // const descriptionRef = useRef()

  // async function handleAddTransaction(e) {
  //   const description = descriptionRef.current.value
  //   if (description === '') return
  //   setTransactions(prevTransactions => {
  //     return [...prevTransactions, { id: 3, description: description, amount: 100 }] 
  //     }
  //   )
  //   descriptionRef.current.value = null
  // }

  return (
    <>
      <TransactionTable transactions={transactions}></TransactionTable>
    </>
      
  )
}

export default App;
