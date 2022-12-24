import styled from "styled-components";

const WelcomeContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    height: 500px;
    padding: 10px;
    margin: 5% auto;
    border-radius: 15px;
    background: ${({ theme }) => theme["light-red"]};
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);
    @media (max-width: 768px) {
        height: 300px;
}
@media (max-width: 414px) {
        height: 200px;
    }
`;

const WelcomeInfo= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 100px;
    padding: 30px;
    color: ${({ theme }) => theme.secondaryColor};
    margin-bottom: 50px;
    width: 100%;
    @media (max-width: 768px) {
        gap: 50px;
        padding: 20px;
        margin-bottom: 30px;
    }
    @media (max-width: 414px) {
        gap: 25px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

const WelcomeTitle = styled.h1`
    font-size: 40px;
    @media (max-width: 768px) {
        font-size:25px;
}
@media (max-width: 414px) {
        font-size: 20px;
    }
`;

const WelcomeText = styled.p`
    font-size: 25px;
    @media (max-width: 768px) {
        font-size:15px;
}
@media (max-width: 414px) {
        font-size: 12px;
    }
`;

const WelcomeImage = styled.img`
    max-width: 600px;
    min-width: 200px;
    width: 100%;
    opacity: 0.85;
    border-radius: 10px;
    padding: 20px;
`;

export {WelcomeContainer,WelcomeInfo,WelcomeTitle,WelcomeText,WelcomeImage};