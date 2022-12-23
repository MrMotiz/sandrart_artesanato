import styled from "styled-components";

const ContactInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 500px;
    padding: 10px;
    margin: 7.5% 5%;
    border-radius: 15px;
    background: ${({ theme }) => theme["light-red"]};
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);
`;

const ContactInfo= styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 50px;
`;

const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    font-size: 40px;
    background: rgba(245, 245, 245, 0.2);
    border-radius: 10px;
    width: 500px;
    height: 150px;
`;

const WelcomeText = styled.p`
    font-size: 25px;
    margin: 5px;
    color: ${({ theme }) => theme.secondaryColor};
`;

const ContactImage = styled.img`
    height: 400px;
    opacity: 0.85;
    border-radius: 10px;
    padding: 20px;
`;

export {ContactInfoContainer,ContactInfo,ContactDetails,WelcomeText,ContactImage};