import MainLogo from "../../../utils/assets/logo.jpg";
import {Logotype} from "./styles";

function Logo(){
    return (
        <Logotype href="/">
            <img src={MainLogo} alt="Logo Sandart"/>
        </Logotype> 
    );
}

export {Logo};