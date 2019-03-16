import axios from 'axios';

export const setLedger = (ledger) => {
  return {
    type: 'SET_LEDGER',
    ledger
  };
};

export const getLedger = () => {
  return (dispatch, getState) => {
    const publicKey = getState().account.publicKey;
    	axios.get(`https://horizon-testnet.stellar.org/accounts/${publicKey}/operations`)
      .then((res) => {
        const transactions = [];
        res.data._embedded.records.map((transaction) => {
          transactions.push({
            timestamp: transaction.created_at,
            from: transaction.from,
            to: transaction.to,
            amount: transaction.amount
          });
        });
        dispatch(setLedger(transactions));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
