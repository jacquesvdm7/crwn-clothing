import styled from "styled-components";

export const SignInContainer = styled.div`
 // 30% of View Width (vw)
 width: 380px;   
    display: flex;
    // all elements on page will be positioned vertically
    flex-direction: column;

    .title {
        // 10 PIXELS ON TOP AND BOTTOM
        margin: 10PX 0;
    }

    // This is just to get our two signin buttons spaced equaly in context of the sigin div
    .buttons {
        display: flex;
        justify-content: space-between;

    }
`;