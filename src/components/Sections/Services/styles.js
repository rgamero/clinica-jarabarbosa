import styled from 'styled-components';
import Media from '../../../utils/StyleUtils';

export const SectionServices = styled.section`
  min-height: 100vh;
  display: flex;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  ${Media.tablet`
    flex-flow: row wrap;
  `};
`;

export const ServiceItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 20rem;
  width: 100%;
  ${Media.tablet`
    flex: 1 1 25%;
    max-width: 25%;
  `};
`;

export const ServicesTitle = styled.p`
  font-size: ${props => props.theme.fontSize.big};
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.fontBold};
  letter-spacing: -1.25px;
  padding-bottom: 4rem;
`;

export const ServicesText = styled.p`
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.fontBold};
  text-align: center;
  letter-spacing: -1.25px;
  padding-top: 0.75rem;
`;
