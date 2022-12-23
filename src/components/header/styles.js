import styled from "styled-components";

const NavigationBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: ${({ theme }) => theme.mainColor};
    height: 120px;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);
`;

export {NavigationBar};