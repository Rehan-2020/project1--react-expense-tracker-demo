import React, { createContext, useReducer } from 'react';

// Import the Reducer
import AppReducer from './AppReducer';

// Create initial state
const initialState = {
    transactions: [ 
    ]
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a provider for the Global Context
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    function deleteTransaction(id) {
        dispatch ({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch ({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}