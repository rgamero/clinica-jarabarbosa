import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: transparent;
  width: 100%;
  position: absolute;
  top: -8rem;
  transition: top 0.25s;
  ${props =>
    props.visible &&
    css`
      top: 0;
    `};
`;

export const HeaderTitle = styled.h1`
  color: ${props => props.theme.primaryColor}};
  letter-spacing: -1px;
`;
