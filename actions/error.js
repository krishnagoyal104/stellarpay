export const setError = (type, text) => {
  return {
    type: 'SET_ERROR',
    error: {type, text}
  };
};

export const removeError = () => {
  return {
    type: 'REMOVE_ERROR'
  };
};