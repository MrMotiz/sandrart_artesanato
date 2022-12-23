import {WelcomeContainer,WelcomeInfo,WelcomeTitle,WelcomeText, WelcomeImage } from "./styles";
import coverImg from "../../utils/assets/coverImg.png"

function WelcomeMessage(){
    return (
        <WelcomeContainer>
            <WelcomeInfo>
            <WelcomeTitle>Bem vindos a Sandrart</WelcomeTitle>
            <WelcomeText> Aqui pode encontrar os trabalhos feitos à mão por mim.<br/>
Inspire se e encomende o seu boneco personalizado!</WelcomeText>
            </WelcomeInfo>
            <WelcomeImage src={coverImg}/>
        </WelcomeContainer>
    )
}

export {WelcomeMessage};