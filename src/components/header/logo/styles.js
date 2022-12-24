import styled from "styled-components";

const Logotype = styled.a`
    img{
    width: 100px;
    height: 100px;
    cursor: pointer;
    border-radius: 50%;
        @media (max-width: 768px) {
            width: 75px;
            height: 75px;
        }
    }
`;

export {Logotype};