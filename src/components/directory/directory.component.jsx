import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector.js'; 
import { DirectoryMenuContainer } from "./directory.styles";

//We changed this to a regular component as we no longer require to hold state here, its done in the reducer now
const Directory = ({ sections }) => (
    
    <DirectoryMenuContainer className='directory-menu'>
        {
            //We spread the properties where key and value is the same using the ... notation
        sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps}/>))};
    </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
}) 


export default connect(mapStateToProps)(Directory);
