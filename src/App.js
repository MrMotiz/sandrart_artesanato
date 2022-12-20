import { BrowserRouter } from "react-router-dom";
import {Header,Footer} from "./components";
import {Pages} from "./pages/Pages";
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from './styles/themes';
import { GlobalStyle } from './styles';

function App() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
   <BrowserRouter>
      <Header/>
      <Pages />
      <Footer/>
   </BrowserRouter>
   <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
