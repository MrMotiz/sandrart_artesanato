import {Routes, Route} from "react-router-dom";
import {Home} from "./Home";
import {About} from "./About";
import {Gallery} from "./Gallery";
import {Contacts} from "./Contacts";


function Pages(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<About/>}/>
            <Route path="/galeria" element={<Gallery/>}/>
            <Route path="/contacto" element={<Contacts/>}/>
        </Routes>
    )
}

export {Pages};