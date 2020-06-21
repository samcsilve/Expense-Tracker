import React from 'react';

import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpenses} from './components/IncomeExpenses'
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'


import './App.css';

function App() {
  return (
    <div>
      <Header />
      <GlobalProvider>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        </GlobalProvider>
    </div>
  );
}

export default App;
