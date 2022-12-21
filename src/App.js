import './App.css';
import TransactionList from './components/TransactionList';
import React, { useState, useRef } from 'react';
import SwaggerClient from 'swagger-client';

function App() {
  const [transactions, setTransactions] = useState([
    /* Default values here */
    {id: 1, description: "transaction1", amount: 4},
    {id: 2, description: "transaction2", amount: 12}
  ]) // Object destructuring

  const descriptionRef = useRef()

  async function handleAddTransaction(e) {
    const description = descriptionRef.current.value
    if (description === '') return
    setTransactions(prevTransactions => {
      return [...prevTransactions, { id: 3, description: description, amount: 100 }] 
      }
    )
    descriptionRef.current.value = null

    const swagger = SwaggerClient('http://petstore.swagger.io/v2/swagger.json');
    const response = await swagger.then(client => client.execute({
        operationId: "getInventory",
    }))
    let result = response.data
    console.log(result)
  }

  return (
    <>
      <input type="text" ref={descriptionRef}></input>
      <button onClick={handleAddTransaction}>Add</button>
      <button>Clear</button>
      <TransactionList transactions={transactions} /* These are props */ />
    </>
      
  )
}

export default App;
