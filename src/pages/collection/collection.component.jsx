import React from 'react';
import { connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import { CollectionPageContainer } from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items} = collection;
    console.log(collection);
    return (
    <CollectionPageContainer>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {items.map((item) => (
                <CollectionItem key={item.id} item={item}/>
            ))}
        </div>
    </CollectionPageContainer>
)
};

// Its nessesary to pass the satte after we get the results of selectCollection (because this returns a function), unlike other seelctor
// This selector needs a part of the stats depending on the URL paramter
const mapStateToProps =  (state, ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);