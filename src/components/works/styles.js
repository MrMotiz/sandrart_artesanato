import styled from "styled-components";

const WorkCardContainer = styled.div`
    height: 300px;
    width: 250px;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    color: ${({ theme }) => theme["white-purple"]};
    transition:transform 0.25s ease;
    img{
        height: 100%;
        width: 100%;
        margin: 5px;
    }
    :hover {
    -webkit-transform:scale(1.25);
    transform:scale(1.25);
}
    
`;

export {WorkCardContainer};