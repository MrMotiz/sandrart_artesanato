
import { MenuContainer, MenuPage } from "./styles";


function Pages(){
    return(
        <MenuContainer>
            <MenuPage to="/">Início</MenuPage>
            {/* <MenuPage to="/sobre">Sobre</MenuPage> */}
            <MenuPage to="/galeria">Galeria</MenuPage>
            <MenuPage to="/contacto">Contacto</MenuPage>
        </MenuContainer>
    )
}

export {Pages};