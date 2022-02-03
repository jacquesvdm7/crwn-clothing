import { createSelector } from 'reselect';

//The property state.shop coms from the name used in the rootReducer
const selectShop = state => state.shop;

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5

// }

export const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
);

//We changed shop.data.ts to object so now we need to convert it to an array for collectionPrevie page
export const selectCollectionsForPreview = createSelector(
    [selectCollections], 
    //We need to get all the keys of the hashtable first and then take the result and use map to get every key lement and the get the collections at that key value
    collections => Object.keys(collections).map(key => collections[key])
)

// find collection.id from matching url paramter of our collction map defined as COLLECTION_ID_MAP
// the array that is passed is the result of funciont "selectCollections" define above
// we then use array find to find the url and then return the id which is required
export const selectCollection = collectionUrlParam =>
// createSelector is a function that restruns another function
createSelector(
    [selectCollections],
    // When this array gets very big it will call the function on every element to compare which can become very time consuming with big arrays
    // We need to nomrlaise the data, we will change our shop.data.js to an object instead of an array, we replace the array find as comment out below
    // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    collections => collections[collectionUrlParam]

)