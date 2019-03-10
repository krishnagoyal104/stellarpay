const initialState = [];

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_BALANCE':
      return action.balance;
    default:
      return state;  
  };
}