import styled from "styled-components";

const ContactInfoContainer = styled.div`
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

const ContactInfo= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

const ContactDetails = styled.div`
    font-size: 40px;
    margin-bottom: 40px;
    background: lightgray;
    border-radius: 10px;
    border: 1px solid gray;
`;

const WelcomeText = styled.p`
    font-size: 25px;
`;

const ContactImage = styled.img`
    height: 400px;
    opacity: 0.85;
    border-radius: 10px;
    padding: 20px;
`;

export {ContactInfoContainer,ContactInfo,ContactDetails,WelcomeText,ContactImage};