import {BsTelephoneFill} from "react-icons/bs";
import {IoMdMail} from "react-icons/io";
import {ContactInfoContainer,ContactInfo,ContactDetails,WelcomeText,ContactImage } from "./styles";
import contactImg from "../../assets/contactImg.png"


function ContactsInfo(){
    return (
        <ContactInfoContainer>
            <ContactInfo>
                <ContactDetails>

            <WelcomeText><BsTelephoneFill/> (+351)912345678</WelcomeText>
            <WelcomeText>Segunda a Sexta, 9horas até ás 18horas</WelcomeText>
                </ContactDetails>
            <ContactDetails>
            <WelcomeText><IoMdMail/> example@example.pt</WelcomeText>
            <WelcomeText>Segunda a Sexta, 9horas até ás 18horas</WelcomeText>
            </ContactDetails>
            </ContactInfo>
            <ContactImage src={contactImg}/>
        </ContactInfoContainer>
    )
}

export {ContactsInfo};