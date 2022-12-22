import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :focus {
  outline: 0;
 }

 body {
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.black};
  -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }
 `;
export { GlobalStyle };