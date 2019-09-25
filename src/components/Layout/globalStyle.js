import styled, { createGlobalStyle } from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  background-color: transparent;
  width: 100%;
  position: fixed;
  will-change: transform;
  z-index: 9;
`;

const GlobalStyle = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    height: 100%;
    overflow-y: ${props => props.theme.overflow};
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    height: 100%;
    font-family: ${props => props.theme.fontRegular};
  }
`;

export default GlobalStyle;
