import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
@media(max-width: 1080px){
  html{
    font-size: 93.75%;
  }
}
@media(max-width: 720px){
  html{
    font-size: 87.5%;
  }
}
body{
  background: #f2f2f2;
  color: #000000;
}
body, button, input, textarea{
  font-size: 1rem;
  font-weight: 400;
}
button{
  cursor: pointer;
}
a{
  text-decoration: none;
  color: inherit;
}
`;
