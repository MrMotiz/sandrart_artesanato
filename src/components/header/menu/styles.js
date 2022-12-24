import {Link} from "react-router-dom";
import styled from "styled-components";

const MenuContainer=styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0px;
    width: 300px;
    font-size: 25px;
    @media (max-width: 414px) {
        width: 200px;
    }
    `;

const MenuPage=styled(Link)`
    list-style:none;
    font-size: 25px;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    color: ${({ theme }) => theme["white-purple"]};
    @media (max-width: 768px) {
        font-size:20px;
    }
    @media (max-width: 414px) {
        font-size:15px;
    }
`;
export{MenuContainer, MenuPage};