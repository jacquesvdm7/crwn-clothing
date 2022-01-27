export const setCurrentUser = (user) => (
    {
        //We use naming convention for const with snakecase names for action types
        type: 'SET_CURRENT_USER',
        payload: user
    }
);