import styled from "styled-components";

const LatestWorksContainer= styled.section`
    background: lightcoral;
    padding: 10px;
    margin: 10px 0px;
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
    color: ${({ theme }) => theme.secondaryColor}
`;

export{LatestWorksContainer,LatestWorksGrid, LatestWorksTitle}