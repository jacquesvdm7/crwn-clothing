import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import PreviewCollections from '../preview-collection/preview-collection.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import { CollectionOverviewContainer } from './collections-overview.styles'; 

const CollectionsOverview =({collections}) => (
    <CollectionOverviewContainer className='collections-overview'>
    {
        collections.map(({id, ...otherProps}) => (
            <PreviewCollections key={id} {...otherProps}/>
        ))
    }
    </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
