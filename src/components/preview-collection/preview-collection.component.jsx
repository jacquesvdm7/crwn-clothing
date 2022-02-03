import React from 'react'
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import {
    PreviewCollectionContainer,
    TitleContainer,
    PreviewContainer
  } from './preview-collection.styles';

const PreviewCollections = ({title, items}) => (
        <PreviewCollectionContainer className='preview-collection'>
            <TitleContainer className='title'>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer className='preview'>
                {items.filter((item,idx) => (idx < 4)).map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </PreviewContainer>
        </PreviewCollectionContainer>
)

export default withRouter(PreviewCollections);