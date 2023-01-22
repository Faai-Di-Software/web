import React from 'react'

export default function TransactionTable({transactions}) {
  return (
    <table>
      <thead>
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {
          transactions.map(transaction => {
            return (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
