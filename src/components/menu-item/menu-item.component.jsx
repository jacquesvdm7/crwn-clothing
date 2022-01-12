import React from 'react';
import './menu-item.styles.scss';


//Take carefull note of how the backgound image was set using the ` and not quotes
//we aslo use the url function and interpolate the imageUrl value
const MenuItem = ({title, imageUrl,id, size}) => {
    return (
    <div style ={{backgroundImage: `url(${imageUrl})`}} className={`${size} menu-item`}>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
    )
};

export default MenuItem;