import { UserActionTypes } from './user.types';
export const setCurrentUser = (user) => (
    {
        //We use naming convention for const with snakecase names for action types
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    }
);