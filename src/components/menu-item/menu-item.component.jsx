import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';


//Take carefull note of how the backgound image was set using the ` and not quotes
//we aslo use the url function and interpolate the imageUrl value
const MenuItem = ({title, imageUrl,id, size , match, history, linkUrl}) => {
    return (
    <div className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style ={{backgroundImage: `url(${imageUrl})`}} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
    )
};

export default withRouter(MenuItem);