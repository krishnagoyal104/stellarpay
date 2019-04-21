const initialState = {};

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECEIVER':
      return action.receiver;         
    default:
      return state;  
  };
}
