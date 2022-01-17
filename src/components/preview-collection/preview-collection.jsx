import React from 'react'
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.scss';

const PreviewCollections = ({title, items}) => (
        <div className='preview-collection'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((item,idx) => (idx < 4)).map(({id, ...otherProps}) => (
                    <CollectionItem key={id} {...otherProps}/>
                ))}
            </div>
        </div>
)

export default PreviewCollections;