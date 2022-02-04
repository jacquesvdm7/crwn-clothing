import React from 'react';

import { 
    SpinnerOverlay,
    SpinnerContainer,

} from './with-spinner.styles';

//High order component that return a function, that is why we have two =>
const WithSpinner = WrappendComponent => 
{
    //This is the fucntion that will be returned inside this function, we dont need to first put it in a vrriable and then return but this is clearer what the function does
    const Spinner = ({ isLoading, ...otherProps }) => 
    {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappendComponent {...otherProps}/>
        );
    };
    return Spinner;
};

export default WithSpinner;