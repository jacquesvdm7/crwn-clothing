import { createStore, applyMiddleware} from 'redux';
// This will allow browser to prists our store data
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

// Import our root reducer which includes all of our other reducers
import rootReducer from './root-reducer';

//we putting the Redux loggers into array middlewares
//for now we only have logger in our middleware array bit we can add more
const middlewares = [];


//We will set the logger only for development environment
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default store;