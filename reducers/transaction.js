const initialState = {resolve: false, payment: false, balance: false, transaction: false, ledger: false, user: false};

export default(state = initialState, {type, context}) => {
  switch (type) {
    case 'UI_START_LOADING':
      switch(context) {
      	case 'resolve':
      		return {...state, resolve: true};
      	case 'payment':
      		return {...state, payment: true};
      	case 'balance':
      		return {...state, balance: true};
      	case 'transaction':
      		return {...state, transaction: true};	
      	case 'ledger':
      		return {...state, ledger: true};
      	case 'user':
      		return {...state, user: true};				
      }
    case 'UI_STOP_LOADING':
      switch(context) {
      	case 'resolve':
      		return {...state, resolve: false};
      	case 'payment':
      		return {...state, payment: false};
      	case 'balance':
      		return {...state, balance: false};
      	case 'transaction':
      		return {...state, transaction: false};	
      	case 'ledger':
      		return {...state, ledger: false};	
      	case 'user':
      		return {...state, user: false};			
      }
    default:
      return state;  
  };
}