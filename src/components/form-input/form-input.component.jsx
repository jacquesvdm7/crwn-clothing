import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
      <GroupContainer>
          <FormInputContainer onChange={handleChange} {...otherProps}/>
          {
              label ? 
            //   we will add shrink property only when property has value
                 <FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</FormInputLabel>
              : null   
          }
      </GroupContainer>
    )
}

export default FormInput;