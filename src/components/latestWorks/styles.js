import styled from "styled-components";

const LatestWorksContainer= styled.section`
    background: lightcoral;
    padding: 20px;
    margin: 10px 0px;
`;

const LatestWorksGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    gap: 50px;
`;

const LatestWorksTitle = styled.h1`
    color: white;
    margin: 10px;
    `;

export{LatestWorksContainer,LatestWorksGrid, LatestWorksTitle}