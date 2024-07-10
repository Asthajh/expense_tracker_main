import React , {useContext , useEffect} from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../Context/Globalstate';
export const Transactionlist = () => {
    const { transactions, getTransactions} = useContext(GlobalContext);

    useEffect(()=>{
        getTransactions();
    });

    return (
        <>
        <h3> History</h3>
        <ul  className="list">
            {transactions.map(transaction => (<Transaction key={transaction._id} transaction=
                {transaction}//for each tran we are gonna render a trans component passed as prop
            />))}
        </ul>
          
        </>
    )
}