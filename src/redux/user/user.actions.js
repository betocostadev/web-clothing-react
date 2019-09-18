import { UserActionTypes } from './user.types';
// Simply put, functions that will return objects
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});