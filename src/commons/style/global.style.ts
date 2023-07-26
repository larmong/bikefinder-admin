import { css } from "@emotion/react";

export const GlobalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@100;200;300;400;700;900&display=swap");
  * {
    margin: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }
  body {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #333333;
  }
  em {
    font-style: normal;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button {
    border: 0;
    cursor: pointer;
    background: #fff;
  }
  input {
    font-size: 15px;
  }
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
    border: 1.3px solid #0d8f68;
    &.bottomBorder {
      border: none;
      border-bottom: 1.3px solid #0d8f68;
    }
  }
  input::placeholder,
  textarea::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    color: #bdbdbd;
  }
`;
