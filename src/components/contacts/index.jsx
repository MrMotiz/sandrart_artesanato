import {BsTelephoneFill} from "react-icons/bs";
import {IoMdMail} from "react-icons/io";
import {ContactInfoContainer,ContactInfo,ContactDetails,WelcomeText,ContactImage } from "./styles";
import contactImg from "../../assets/contactImg.png"


function ContactsInfo(){
    return (
        <ContactInfoContainer>
            <ContactInfo>
                <ContactDetails>
                    <WelcomeText><BsTelephoneFill/> (+351)919 979 478</WelcomeText>
                    <WelcomeText>Segunda a Sexta</WelcomeText>
                    <WelcomeText>9horas até ás 18horas</WelcomeText>
                </ContactDetails>
                <ContactDetails>
                    <WelcomeText><IoMdMail/> Sandrart.artesanato@gmail.com</WelcomeText>
                </ContactDetails>
            </ContactInfo>
            <ContactImage src={contactImg}/>
        </ContactInfoContainer>
    )
}

export {ContactsInfo};