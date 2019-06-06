export const setError = (title, description) => {
  return {
    type: 'SET_ERROR',
    error: {isVisible: true, title, description}
  };
};

export const removeError = () => {
  return {
    type: 'REMOVE_ERROR'
  };
};