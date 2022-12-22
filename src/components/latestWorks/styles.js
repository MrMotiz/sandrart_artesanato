import styled from "styled-components";

const LatestWorksContainer= styled.section`
    padding: 10px;
    margin: 10px 0px;
    margin-bottom: 50px;
    background: ${({ theme }) => theme["light-red"]};
    `;

const LatestWorksGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    gap: 50px;
    `;

const LatestWorksTitle = styled.h1`
    margin: 10px;
    color: ${({ theme }) => theme.secondaryColor};
    color: #DD116A;
`;

export{LatestWorksContainer,LatestWorksGrid, LatestWorksTitle}