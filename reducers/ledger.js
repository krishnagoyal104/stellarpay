const initialState = [];

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEDGER':
      return [...state, ...action.ledger];
    case 'CLEAR_LEDGER':
    	return [];  
    default:
      return state;  
  };
}