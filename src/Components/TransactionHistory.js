import React, { useContext } from 'react'

// Import the Global Context
import { GlobalContext } from '../Context/GlobalState';

// Import Transactions
import { Transaction } from './Transaction';

export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    
    return (
        <>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction=
                {transaction} />))}
            </ul>
        </>
    )
}
