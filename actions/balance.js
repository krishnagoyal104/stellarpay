import axios from 'axios';

export const setBalance = (balance) => {
  return {
    type: 'SET_BALANCE',
    balance
  };
};

export const getBalance = () => {
  return (dispatch, getState) => {
    return axios(`https://horizon-testnet.stellar.org/accounts/GDRSAOHSV6DZSTJPUZIKAB3B57EBTANEG2W4C47WODTQ5W4SW3H657TV`)
    .then((res) => {
    	console.log(res);
    	const parsedRes = res.data.balances;
      console.log(parsedRes);
    	const balances = [];
        for(i=0; i<parsedRes.length;i++){ 
          balances.push({
          	balance: parsedRes[i].balance,
          	key: parsedRes[i].asset_type
          }); 
        }
    	dispatch(setBalance(balances));
    })
    .catch((e) => {
    	console.log(e);
    });
  };
};