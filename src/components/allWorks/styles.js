import styled from "styled-components";

const GalleryContainer= styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    background: ${({ theme }) => theme["light-red"]};
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);
    margin: 10px auto;
    padding: 20px;
    border-radius: 20px;
    gap: 50px;
    @media (max-width: 767px) {
        width: 90%;
        gap: 0px;
    }
`;

export {GalleryContainer};