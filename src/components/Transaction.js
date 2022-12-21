import React from 'react'

export default function Transaction({transaction}) {
  return (
    <div>
        <div>
            Description: {transaction.description}
        </div>
        <div>
            Amount: {transaction.amount}
        </div>
    </div>
  )
}
