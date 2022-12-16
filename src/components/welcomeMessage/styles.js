import styled from "styled-components";

const WelcomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 500px;
    padding: 10px;
    margin: 5% auto;
    border-radius: 15px;
    background: #eaf2d7;
    box-shadow: 5px 5px 10px gray;
    gap: 40px;
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
    color: #D34F73;
    font-size: 40px;
`;

const WelcomeText = styled.p`
    font-size: 25px;
    color: #e75d9d;
    text-align: center;
`;

const WelcomeImage = styled.img`
    width: 600px;
    opacity: 0.85;
    border-radius: 10px;
    padding: 20px;
`;

export {WelcomeContainer,WelcomeInfo,WelcomeTitle,WelcomeText,WelcomeImage};