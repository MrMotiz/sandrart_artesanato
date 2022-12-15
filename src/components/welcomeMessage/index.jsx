import {WelcomeContainer,WelcomeInfo,WelcomeTitle,WelcomeText, WelcomeImage } from "./styles";
import coverImg from "../../assets/coverImg.png"

function WelcomeMessage(){
    return (
        <WelcomeContainer>
            <WelcomeInfo>
            <WelcomeTitle>Welcome to SandrArt</WelcomeTitle>
            <WelcomeText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat officiis minima modi, eius magnam? 
                <br/> Voluptas at recusandae, eaque quidem nam totam officia quos est, earum provident dolorem accusantium necessitatibus!</WelcomeText>
            </WelcomeInfo>
            <WelcomeImage src={coverImg}/>
        </WelcomeContainer>
    )
}

export {WelcomeMessage};