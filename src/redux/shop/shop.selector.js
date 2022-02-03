import { createSelector } from 'reselect';

//The property state.shop coms from the name used in the rootReducer
const selectShop = state => state.shop;

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5

}

export const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
);

// find collection.id from matching url paramter of our collction map defined as COLLECTION_ID_MAP
// the array that is passed is the result of funciont "selectCollections" define above
// we then use array find to find the url and then return the id which is required
export const selectCollection = collectionUrlParam =>
// createSelector is a function that restruns another function
createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])

)