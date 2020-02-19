import styled, { css } from 'styled-components';
import Media from '../../../utils/StyleUtils';

export const SectionBio = styled.section`
  min-height: auto;
  display: flex;
  flex-flow: column nowrap;
  ${Media.tablet`
    flex-flow: row nowrap;
  `};
`;

export const BioImgWrapper = styled.div`
  flex: 1 1 100%;
  width: 100%;
  order: 1;
  ${Media.tablet`
    flex: 0 0 50%;
    max-width: 50%;
    ${props =>
      props.inverseOrder &&
      css`
        order: 2;
      `};
  `};
`;

export const BioTextWrapper = styled(BioImgWrapper)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: ${props => props.theme.vw};
  ${Media.tablet`
    min-height: auto;
  `};
`;

export const BioTitle = styled.p`
  font-size: 3rem;
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.fontBold};
  letter-spacing: -1.25px;
  padding-bottom: 3rem;
  ${Media.tablet`
    font-size: ${props => props.theme.fontSize.med};
    padding-bottom: 2rem;
  `};
  ${Media.desktop`
    font-size: ${props => props.theme.fontSize.big};
    padding-bottom: 3rem;
  `};
  ${Media.giant`
    padding-bottom: 4rem;
  `};
`;

export const BioDescription = styled.p`
  font-size: 2.5rem;
  color: ${props => props.theme.secondaryColor};
  font-family: ${props => props.theme.fontRegular};
  text-align: center;
  letter-spacing: -1.25px;
  line-height: 3.5rem;
  padding: 0 3rem;
  ${Media.tablet`
    font-size: 2.25rem;
    line-height: 3rem;
  `};
  ${Media.desktop`
    font-size: 2.75rem;
    line-height: 4rem;
    padding: 0 5rem;
  `};
  ${Media.giant`
    font-size: 3rem;
    line-height: 4.25rem;
    padding: 0 10rem;
  `};
`;
