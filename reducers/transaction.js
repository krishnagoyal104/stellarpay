const initialState = false;

export default(state = initialState, action) => {
  switch (action.type) {
    case 'UI_START_LOADING':
      return true;
    case 'UI_STOP_LOADING':
      return false;
    default:
      return state;  
  };
}