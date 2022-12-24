import styled from "styled-components";

const LatestWorksContainer= styled.section`
    padding: 10px;
    margin: 10px 0px;
    margin-bottom: 50px;
    background: ${({ theme }) => theme["light-red"]};
    @media (max-width: 768px) {
        height: 100%;
        margin: 0 auto;
    }   
    `;

const LatestWorksGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    margin: 10px;
    gap: 40px;
    @media (max-width: 768px) {
        height: 100%;
        margin: 5px;
        gap: 10px;
        flex-wrap: wrap;
    }   
    `;

const LatestWorksTitle = styled.h1`
    margin: 10px;
    color: #DD116A;
    @media (max-width: 768px) {
        font-size:25px;
}
@media (max-width: 414px) {
        font-size:20px;
}
`;

export{LatestWorksContainer,LatestWorksGrid, LatestWorksTitle}