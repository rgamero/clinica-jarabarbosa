import styled, { css } from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 50rem;
  height: 40rem;
  opacity: 0;
  transform: translateY(-7.5%);
`;

export const IsotipoStyle = styled.svg`
  width: 100%;
  height: 100%;
`;

export const LogoTitle = styled.span`
  font-size: 4.75rem;
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.fontBold};
  letter-spacing: -1.25px;
  line-height: 5rem;
  ${props =>
    props.secColor &&
    css`
      color: ${props.theme.secondaryColor};
    `};
`;

export const LogoSubtitle = styled.span`
  font-size: 3.25rem;
  color: ${props => props.theme.secondaryColor};
  letter-spacing: -1px;
  line-height: 4rem;
`;
