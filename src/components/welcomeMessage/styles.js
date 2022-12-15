import styled from "styled-components";

const WelcomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 500px;
    padding: 10px;
    margin: 5% 5%;
    border: 1px solid gray;
    border-radius: 15px;
    background: beige;
    gap: 50px;
`;

const WelcomeInfo= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    padding: 30px;
`;

const WelcomeTitle = styled.h1`
    color: red;
    font-size: 40px;
`;

const WelcomeText = styled.p`
    font-size: 25px;
    color: green;
    text-align: center;
`;

const WelcomeImage = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: auto;
    object-fit: cover;
    opacity: 0.85;
    border-radius: 10px;
    padding: 20px;
`;

export {WelcomeContainer,WelcomeInfo,WelcomeTitle,WelcomeText,WelcomeImage};