import styled from "styled-components";

const WorkCardContainer = styled.div`
    height: 300px;
    width: 250px;
    background:lightcyan;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    img{
        height: 100%;
        width: 100%;
        transition:transform 0.25s ease;
    }
    img:hover {
    -webkit-transform:scale(1.5); /* or some other value */
    transform:scale(1.5);
}
    
`;

export {WorkCardContainer};