import React from "react";
// import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => {
  // const Button = styled.button``;

  // const Para = styled.p``;

  let myFavColor = "red";

  const theme = {
    color: {
      textColor: "yellow",
      bg: "red"
    },
    responsive: {
      mobile: "768px",
      tab: "998",
    },
  }

  const Button = styled.button`
    display: inline-block;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    border: 2px solid #007bff;
    color: #007bff;
    // color: ${myFavColor};
    background-color: ${({theme}) => theme.color.bg};
    // background-color: ${({ bg }) => bg};
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    // background: skyblue;

    &:hover {
      background-color: #007bff;
      color: #fff;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
    }

    &:active {
      background-color: #0056b3;
      border-color: #0056b3;
      color: #fff;
    }

    &:after {
      content: "👍";
    }

    /*
    span {
      color: red;

      // b{
      //   color: #fff;
      // }

      .test {
        color: #fff; // Same as above b tag
      }

      &:hover {
        color: #fff;
      }
    }
    */

    // @media (max-width:${({theme}) => theme.responsive.mobile})
  `;

  const Para = styled.p`
    color: grey;
    font-size: 20px;
  `;
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Button className="btn" bg="yellow">
          Styled Component
        </Button>
        <Para>Yash Ruikar</Para>
      </>
    </ThemeProvider>
  );
};

export default App;
