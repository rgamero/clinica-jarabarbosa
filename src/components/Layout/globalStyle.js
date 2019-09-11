import styled, { createGlobalStyle } from 'styled-components';
import fontFiles from '../../utils/fonts';

export const HeaderContainer = styled.div`
  display: flex;
  background-color: transparent;
  width: 100%;
  position: fixed;
  will-change: transform;
  z-index: 9;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ${props => props.theme.fontRegular};
    font-style: normal;
    font-weight: normal;
    src: url(${fontFiles.CocoGothicWOFF}) format('woff'),
    url(${fontFiles.CocoGothicTTF}) format('truetype'),
    url(${fontFiles.CocoGothicEOT}) format('embedded-opentype'),
    url(${fontFiles.CocoGothicSVG}) format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: ${props => props.theme.fontBold};
    font-style: normal;
    font-weight: bold;
    src: url(${fontFiles.CocoGothicBoldWOFF}) format('woff'),
    url(${fontFiles.CocoGothicBoldTTF}) format('truetype'),
    url(${fontFiles.CocoGothicBoldEOT}) format('embedded-opentype'),
    url(${fontFiles.CocoGothicBoldSVG}) format('svg'); /* Legacy iOS */
  }
  * {
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
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
    background: linear-gradient(-45deg, #ffffff, #ffbbb6, #f8d1dc, #fcece9);
    background-size: 400% 400%;
    background-attachment: fixed;
    font-family: ${props => props.theme.fontRegular};
  }
  body > * {
    min-height: ${props => props.theme.vh};
  }
`;

export default GlobalStyle;
