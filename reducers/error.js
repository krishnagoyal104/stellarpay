const initialState = {};

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.error;
    case 'REMOVE_ERROR':
      return {isVisible: false};          
    default:
      return state;  
  };
}
