import {NavigationBar} from "./styles";
import {Logo} from "./logo/index";
import {Pages} from "./menu/index";

function Header(){
    return(
        <NavigationBar>
            <Logo/>
            <Pages/>
        </NavigationBar>
    );
}

export{Header};