import styled from "styled-components";


const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    background: #e75d9d;
    z-index: 3;
`;

const FooterTitle = styled.h1`
    font-size: 20px;
    color: white;
`;

const FooterText = styled.p`
    color: purple;
    font-size: 16px;
`;

const FooterIconsContainer = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-around;
    font-size: 25px;
    color: white;
`;

export {FooterContainer, FooterTitle, FooterText, FooterIconsContainer};