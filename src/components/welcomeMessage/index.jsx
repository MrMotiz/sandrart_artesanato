import {WelcomeContainer,WelcomeInfo,WelcomeTitle,WelcomeText, WelcomeImage } from "./styles";
import coverImg from "../../assets/coverImg.png"

function WelcomeMessage(){
    return (
        <WelcomeContainer>
            <WelcomeInfo>
            <WelcomeTitle>Welcome to SandrArt</WelcomeTitle>
            <WelcomeText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br/> Accusantium fugiat officiis minima modi, eius magnam? </WelcomeText>
            </WelcomeInfo>
            <WelcomeImage src={coverImg}/>
        </WelcomeContainer>
    )
}

export {WelcomeMessage};