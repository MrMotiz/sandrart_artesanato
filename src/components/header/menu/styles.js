import {Link} from "react-router-dom";
import styled from "styled-components";

const MenuContainer=styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    margin: 10px 20px;
    width: 500px;
`;

const MenuPage=styled(Link)`
    list-style:none;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
`;
export{MenuContainer, MenuPage};