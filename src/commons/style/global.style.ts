import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mediaQuery } from "./mediaQuery.style";

export const GlobalStyle = css`
  // 100, 300, 400, 500, 700
  @font-face {
    font-family: "SpoqaHanSansNeo";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "EnjoyStories";
    font-weight: 300;
    font-style: normal;
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/tvn/EnjoyStoriesLight.ttf")
      format("truetype");
  }

  * {
    margin: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }
  body {
    font-family: "SpoqaHanSansNeo", Arial, sans-serif;
    font-weight: 500;
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
    font-size: 16px;
    line-height: 23px;
    color: #bdbdbd;
  }
  ${mediaQuery[1]} {
    input::placeholder,
    textarea::placeholder {
      font-size: 14px;
      line-height: 23px;
    }
  }
`;

export const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
  ${mediaQuery[0]} {
    padding: 0 30px;
    width: 100%;
  }
  ${mediaQuery[2]} {
    padding: 0 20px;
  }
`;
