import styled from "styled-components";

const MenuContainer=styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    margin: 10px 20px;
    width: 500px;
`;

const MenuPage=styled.li`
    list-style:none;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
`;
export{MenuContainer, MenuPage};