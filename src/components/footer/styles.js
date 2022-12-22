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
    background: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme["white-purple"]};
    z-index: 3;
    margin-top: 50px;
    padding: 10px;
    gap: 10px;
`;

const FooterTitle = styled.h1`
    font-size: 20px;
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
`;

export {FooterContainer, FooterTitle, FooterText, FooterIconsContainer};