import axios from 'axios';

export const setBalance = (balances) => {
  return {
    type: 'SET_BALANCES',
    balances
  };
}; 

export const getBalance = () => {
  return (dispatch, getState) => {
    const publicKey = getState().account.publicKey;
    return axios(`https://horizon-testnet.stellar.org/accounts/${publicKey}`)
    .then((res) => {
    	const balances = res.data.balances;
    	dispatch(setBalance(balances));
      console.log('dnfhdsbfdsf', res);
    })
    .catch((e) => {
    	console.log(e);
    });
  };
};