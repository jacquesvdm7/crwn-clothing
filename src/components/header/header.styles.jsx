import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// We are going to use this styling for our Link and div tag so we need to reuse it like this using styled-components css library
const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

//This will wrap the Link component in styled component
export const HeaderLogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const HeaderOptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const HeaderOptionLinkContainer = styled(Link)`
    ${OptionContainerStyles}
`;

export const HeaderOptionDivContainer = styled.div`
    ${OptionContainerStyles}
`;
