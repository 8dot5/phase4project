import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import App from "./components/App";

import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
  }

  body {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
    /* background: black; */
    /* Lyrid Meteors from the Constellation Lyra : https://apod.nasa.gov/apod/ap200512.html*/
    /* background-image: url('https://apod.nasa.gov/apod/image/2005/Lyrids_Horalek_1221.jpg'); */
    
    background-image: url("https://i.ibb.co/qyKVMdz/Local-Group-and-nearest-galaxies-copy.png");
    background-color:black;
    background-size:60%;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    opacity: 0.95;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);