import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import PreviewCollections from '../preview-collection/preview-collection.component';
import { selectCollections } from '../../redux/shop/shop.selector';

import './collections-overview.styles.scss';

const CollectionsOverview =({collections}) => (
    <div className='collections-overview'>
    {
        collections.map(({id, ...otherProps}) => (
            <PreviewCollections key={id} {...otherProps}/>
        ))
    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
