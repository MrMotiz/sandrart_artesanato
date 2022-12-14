import { MenuContainer, MenuPage } from "./styles";


function Pages(){
    return(
        <MenuContainer>
            <MenuPage>Home</MenuPage>
            <MenuPage>About</MenuPage>
            <MenuPage>Galerie</MenuPage>
            <MenuPage>Contacts</MenuPage>
        </MenuContainer>
    )
}

export {Pages};