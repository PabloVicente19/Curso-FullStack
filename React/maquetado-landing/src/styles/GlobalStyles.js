import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --orange-bg: #2f2618;
        --orange: #ff9f01;
        --magenta: #ff005c;
        --gray-bg: #2b2b2c;
        --btn-gradient: linear-gradient(83deg,#ffa100,#fb103d);
        --btn-gradient-secondary: linear-gradient(140deg, #3b3022, #3b2329);
    }
    html{
        scroll-behavior:smooth;
    }
    body{
         margin:0;
         padding:0;
         background-color: #131415;
         font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
         color:white;
         -webkit-tap-highlight-color: transparent;
         overflow-x: hidden;
    }
    a{
        text-decoration: none;
        color:white
    }
    a:vicited{
        color: white;
    }
    li{
        list-style:none;
    }
`;
