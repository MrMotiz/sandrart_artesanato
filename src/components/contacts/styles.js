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
    @media (max-width: 768px) {
        height: 300px;
        padding: 5px;
    }
    @media (max-width: 500px) {
        justify-content: center;
}
`;

const ContactInfo= styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 50px;
    @media (max-width: 768px) {
        gap: 25px;
        padding: 15px;
}
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
    max-width: 500px;
    width: 100%;
    height: 150px;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);
    @media (max-width: 768px) {
        max-width: 400px;
        height: 100px;
        gap: 10px;
}
`;

const WelcomeText = styled.p`
    font-size: 25px;
    margin: 5px;
    color: ${({ theme }) => theme.secondaryColor};
    @media (max-width: 768px) {
        font-size: 17.5px;
}
`;

const ContactImage = styled.img`
    max-width: 400px;
    min-width: 150px;
    width: 100%;
    opacity: 0.85;
    border-radius: 10px;
    padding: 20px;
    @media (max-width: 768px) {
        max-width:300px;
        
}
@media (max-width: 500px) {
        display: none;
}
`;

export {ContactInfoContainer,ContactInfo,ContactDetails,WelcomeText,ContactImage};