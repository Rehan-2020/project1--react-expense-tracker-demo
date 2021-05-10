import React from'react';
import logo from './logo.svg';
import './App.css';

// import the Global Provider
import { GlobalProvider } from './Context/GlobalState'

// Import Components
import { Header } from './Components/Header'
import { Balance } from './Components/Balance'
import { AccountSummary } from './Components/AccountSummary'
import { TransactionHistory } from './Components/TransactionHistory'
import { AddTransaction } from './Components/AddTransaction'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
