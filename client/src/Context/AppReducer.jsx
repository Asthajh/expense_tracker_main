export default (state,action) => {
    switch(action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,//means that transactions are fetched
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            //reducer is just the way to change the state and send it down to ur component
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id!==action.payload)//send down all the transaction except for those that were deleted
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]//return transaction that are already there along with those added in payload
                }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }        

        default:
        return state;
    }
}