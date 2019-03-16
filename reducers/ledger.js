const initialState = [];

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEDGER':
      return action.ledger;
    default:
      return state;  
  };
}