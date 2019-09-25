import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  background: linear-gradient(-45deg, #ffffff, #ffbbb6, #f8d1dc, #fcece9);
  background-size: 400% 400%;
  background-position: 0% 0%;
  background-attachment: fixed;
  width: 100%;
  position: absolute;
  top: -8rem;
  transition-property: top, background-position;
  transition-duration: 0.25s, 0.5s;
  transition-timing-function: ease, ease-out;
  ${props =>
    props.visible &&
    css`
      top: 0;
    `};
  ${props =>
    props.bgAnim === 'bgAnim1' &&
    css`
      background-position: 0% 50%;
    `};
  ${props =>
    props.bgAnim === 'bgAnim2' &&
    css`
      background-position: 100% 50%;
    `};
  ${props =>
    props.bgAnim === 'bgAnim3' &&
    css`
      background-position: 100% 100%;
    `};
`;

export const HeaderTitle = styled.h1`
  color: ${props => props.theme.primaryColor}};
  letter-spacing: -1px;
`;
