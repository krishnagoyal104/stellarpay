const initialState = [];

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECENT':
    	let duplicate; 
      state.map((obj) => {
      	if(obj.number === action.recipient.number){
      		duplicate = true;
      	}
      });
      if(duplicate){
      	return state;
      }
      else{
        if(state.length >= 5){
          return [action.recipient, ...state.slice(0, -1)]; 
        }
        else{
          return [action.recipient, ...state];
        }
      }
    default:
      return state;  
  };
}