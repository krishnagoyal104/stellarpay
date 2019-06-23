const initialState = {isVisible: false};

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {isVisible: true, ...action.error};
    case 'REMOVE_ERROR':
      return {isVisible: false};          
    default:
      return state;  
  };
}
