const initialState = {};

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_KEYPAIR':
      return action.keypair;
    default:
      return state;  
  };
}