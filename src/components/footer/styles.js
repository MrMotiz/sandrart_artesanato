import styled from "styled-components";


const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid black;
    background: red;
    z-index: 3;
`;

const FooterTitle = styled.h1`
    font-size: 20px;
    color: pink;
`;

const FooterText = styled.p`
    color: purple;
`;

export {FooterContainer, FooterTitle, FooterText};