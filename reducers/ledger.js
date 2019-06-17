const initialState = [];

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEDGER':
      if(action.payload.order === 'asc')
      {
      	return [...action.payload.ledger, ...state];
      }
      else{
      	return [...state, ...action.payload.ledger];
      }
    default:
      return state;  
  };
}