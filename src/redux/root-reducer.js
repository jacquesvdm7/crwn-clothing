import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    //Where do we wan to start to prist data
    key: 'root',
    storage,
    //Array of producers we want to store, we only persist cart here as user is persisted in Firebase
    whitelist: ['cart']
}

const rootReducer = combineReducers(
    {
        user: userReducer,
        cart: cartReducer,
        directory: directoryReducer,
        shop: shopReducer
    }
);

// We now wrap our new root Reducer with persistReducer that we imported in the beginning
export default persistReducer(persistConfig,rootReducer);