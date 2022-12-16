import { LatestWorksContainer,LatestWorksGrid, LatestWorksTitle } from "./styles";
import {WorkCard} from "../works";

function LatestWorks(){
    return(
        <LatestWorksContainer>
            <LatestWorksTitle>Trabalho mais recentes</LatestWorksTitle>
            <LatestWorksGrid>  
            <WorkCard>
                <img src="https://scontent.fopo5-2.fna.fbcdn.net/v/t39.30808-6/311505322_475536501263884_4714399610333470462_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DZ-F1GpaC-gAX-VA8M1&_nc_ht=scontent.fopo5-2.fna&oh=00_AfD5gpKMnk-_SinHTLrq7E1qHHotR2n9SiKXPIgdUrlmNw&oe=63A24539" alt="" />
                <h1>Quadro nascimento</h1>
            </WorkCard>
            <WorkCard>
                <img src="https://scontent.fopo5-2.fna.fbcdn.net/v/t39.30808-6/301567701_443732834444251_8788687277428002513_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ltFT5a1Fx0wAX-9m419&_nc_ht=scontent.fopo5-2.fna&oh=00_AfC1zmMrV2g7na4ko06ZtTk2pAuP4LZO5WLMnxjLaeReEg&oe=63A163B8" alt="" />
                <h1>Nail Expert</h1>
            </WorkCard>
            <WorkCard>
                <img src="https://scontent.fopo5-1.fna.fbcdn.net/v/t39.30808-6/300953089_441718187979049_508913945413178953_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=A8rQdb1hhRUAX-6fij0&_nc_ht=scontent.fopo5-1.fna&oh=00_AfBOtU4cPu_SEOiS1odA-j9HwOfuduMsUc0KkDjOBKgNcQ&oe=63A1B437" alt="" />
                <h1>Enfermeira Sara</h1>
            </WorkCard><WorkCard>
                <img src="https://scontent.fopo5-2.fna.fbcdn.net/v/t39.30808-6/301880846_441714014646133_3566710860200893208_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tQiTDVOwbsMAX8NC5I2&_nc_ht=scontent.fopo5-2.fna&oh=00_AfAttxZTKb7AvIrDg3fNP0a7k2Fxai2qd9UclzXQcaRAlQ&oe=63A20DB7" alt="" />
                <h1>Enfermeira Silva</h1>
            </WorkCard><WorkCard>
                <img src="https://scontent.fopo5-1.fna.fbcdn.net/v/t39.30808-6/296062892_425332999617568_879942679882739903_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pB-DfiNxs18AX-uMP8I&_nc_ht=scontent.fopo5-1.fna&oh=00_AfDqqFBWBMSnhDOm6etlSacX52OAYLcXKOHhnu3dI4fVeg&oe=63A1F8D6" alt="" />
                <h1>Mirabel - "Encanto"</h1>
            </WorkCard><WorkCard>
                <img src="https://scontent.fopo5-1.fna.fbcdn.net/v/t39.30808-6/276233697_7512328778785014_8756515549070437660_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_vIY1k8WC5gAX82rQTe&_nc_ht=scontent.fopo5-1.fna&oh=00_AfAzZFsPYs9TAFWKITF6iUzNrPTuwN4lBmQjXC8NU-PwYQ&oe=63A0BF88" alt="" />
                <h1>Chá do bebé do Lucas</h1>
            </WorkCard>
            </LatestWorksGrid>
        </LatestWorksContainer>
    );
}


export {LatestWorks};