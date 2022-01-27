import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

// Import our root reducer which includes all of our other reducers
import rootReducer from './root-reducer';

//we putting the Redux loggers into array middlewares
//for now we only have logger in our middleware array bit we can add more
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;