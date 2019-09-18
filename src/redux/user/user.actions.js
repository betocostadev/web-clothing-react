// Simply put, functions that will return objects
export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
});