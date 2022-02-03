import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
  } from './menu-item.styles';

//Take carefull note of how the backgound image was set using the ` and not quotes
//we aslo use the url function and interpolate the imageUrl value
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <ContentContainer className='content'>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );

export default withRouter(MenuItem);