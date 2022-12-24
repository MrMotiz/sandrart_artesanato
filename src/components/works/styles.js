import styled from "styled-components";

const WorkCardContainer = styled.div`
    height: 300px;
    width: 225px;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme["white-purple"]};
    font-size: 12.5px;
    transition:transform 0.25s ease;
    margin: 5px;
    img{
        height: 100%;
        width: 100%;
        margin: 2.5px;
    }
    :hover {
    -webkit-transform:scale(1.25);
    transform:scale(1.25);
}
    @media (max-width: 768px) {
    height: 200px;
    width: 125px;
    font-size: 10px;
    img{
        max-width: 100px;
    }
}
`;

export {WorkCardContainer};