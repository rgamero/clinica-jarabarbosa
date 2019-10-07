import styled, { css, createGlobalStyle } from 'styled-components';
import Media from '../../utils/StyleUtils';

export const Section = styled.section`
  min-height: 100vh;
`;

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  background-color: transparent;
  height: 6.5rem;
  width: 100%;
  will-change: transform;
  z-index: 9;
  transform: translateY(-7.5rem);
  transition: transform 0.25s ease;
  ${Media.tablet`
    height: 7.5rem;
  `};
  ${props =>
    props.visible &&
    css`
      transform: translateY(0);
    `};
`;

export const HeaderBg = styled.div`
  position: fixed;
  background: linear-gradient(-45deg, #ffffff, #ffbbb6, #f8d1dc, #fcece9);
  background-size: 400% 400%;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    will-change: opacity;
    width: 100%;
    height: 100%;
    background-color: #ffbbb6;
    opacity: 0;
    transition: opacity 0.5s ease-out;
    ${props =>
      props.bgAnim === 'bgAnim' &&
      css`
        opacity: 1;
      `};
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -9;
  background: linear-gradient(-45deg, #ffffff, #ffbbb6, #f8d1dc, #fcece9);
  background-size: 400% 400%;
  &::before {
    content: '';
    position: absolute;
    will-change: opacity;
    width: 100%;
    height: 100%;
    background-color: #ffbbb6;
    opacity: 0;
    transition: opacity 0.5s ease-out;
    ${props =>
      props.bgAnim === 'bgAnim' &&
      css`
        opacity: 1;
      `};
  }
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
    font-family: ${props => props.theme.fontRegular};
  }
`;

export default GlobalStyle;
