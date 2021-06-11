import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html{        
        font-family: "Poppins", sans-serif;
        font-weight:300;
        font-size:100%;
        color:#212121;
        box-sizing:border-box;
  }
  *,*::before,::after{
    box-sizing:inherit;
  } 

body{    
    box-sizing: border-box;
    font-family: 'Roboto';
    }

h1,h2,h3,h4,h5,h6{
    line-height:3.5rem ;
    color:white
}

    h1{
        font-size: 4rem;
        margin:0px;
        padding: 0;
    }
    p{
        font-weight: 400;
        color:white
    }

`;

export default GlobalStyle;
