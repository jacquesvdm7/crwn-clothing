import React  from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../../pages/collection/collection.component';
import CollectionsOverview from '../collections-overview/collections-overview.component';

//because shop page is already in a Route component from our app.js component we have access to match, location and history
// This is an example of dynamic routing to different pags using a path parameter
const ShopPage = ({ match }) => 
{
    console.log(match);

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}


export default ShopPage;