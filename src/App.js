import { BrowserRouter } from "react-router-dom";
import {Header,Footer} from "./components";
import {Pages} from "./pages/Pages";

function App() {
  return (
   <BrowserRouter>
      <Header/>
      <Pages />
      <Footer/>
   </BrowserRouter>
  );
}

export default App;
