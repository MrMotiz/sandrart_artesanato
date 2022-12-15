import {IoLogoFacebook, IoLogoInstagram, IoMdHeartEmpty} from "react-icons/io";
import { FooterContainer, FooterTitle, FooterText, FooterIconsContainer } from "./styles";


function Footer(){
    return(
        <FooterContainer>
            <FooterTitle>Segue:</FooterTitle>
            <FooterIconsContainer>
                <IoLogoFacebook style={{cursor:'pointer'}} onClick={()=>window.location.href= "https://www.facebook.com/evasandrart"}/>
                <IoLogoInstagram style={{cursor:'pointer'}} onClick={()=>window.location.href= "https://www.instagram.com/sandrart.artesanato/"}/>
                </FooterIconsContainer>
            <FooterText>Made with <IoMdHeartEmpty style={{fontSize: '18px', color:"#f44336"}}/> from Carlos Pinto</FooterText>
        </FooterContainer>
    )
}

export {Footer};