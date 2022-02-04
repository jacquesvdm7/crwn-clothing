import React, { Component }  from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase-utils'; 
import { updateCollections } from '../../redux/shop/shop.actions';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
//because shop page is already in a Route component from our app.js component we have access to match, location and history
// This is an example of dynamic routing to different pags using a path parameter
class ShopPage  extends Component  
{
    //Apparently the constrcutor will be autocreated and then super will be autocalled so we dont have to do that anymore in latest versions
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;
    
    componentDidMount() {
        const { updateCollectionsMap } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async  snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            console.log('collection :', collectionsMap);
            updateCollectionsMap(collectionsMap);
            this.setState({loading: false});
        });
    }

    componentWillUnmount() {
        // This will close the collections subscription
        this.unsubscribeFromSnapshot();
      }

    // We added render to the Route to ensure the spinner runs while the data is loading 
    render () {
        const { match} = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
            
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
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