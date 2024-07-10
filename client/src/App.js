import React from 'react';
import {Header} from './Components/Header';
import {Balance} from './Components/Balance';
import {Incomeexpenses} from './Components/Incomeexpenses';
import {Transactionlist} from './Components/Transactionlist';
import {AddTransaction} from './Components/AddTransaction';
import { GlobalProvider } from './Context/Globalstate';


import './App.css';

function App() {
  return (
    <div>
      <GlobalProvider>
      <Header/>
      <div className='container'>
      <Balance/>
      <Incomeexpenses/>
      <Transactionlist/>
      <AddTransaction/>

      </div>
      </GlobalProvider>
    </div>
  );
}
export default App;
