import React, { Component }  from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase-utils'; 
import { updateCollections } from '../../redux/shop/shop.actions';

//because shop page is already in a Route component from our app.js component we have access to match, location and history
// This is an example of dynamic routing to different pags using a path parameter
class ShopPage  extends Component  
{

    unsubscribeFromSnapshot = null;
    
    componentDidMount() {
        const { updateCollectionsMap } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async  snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            console.log('collection :', collectionsMap);
            updateCollectionsMap(collectionsMap);
        })
    }

    componentWillUnmount() {
        // This will close the collections subscription
        this.unsubscribeFromSnapshot();
      }


    render () {
        const { match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => (
    {
        updateCollectionsMap: collectionsMap => 
            dispatch(updateCollections(collectionsMap)) 
    }
)

export default connect(null, mapDispatchToProps)(ShopPage);