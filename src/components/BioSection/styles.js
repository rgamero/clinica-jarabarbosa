import styled, { css } from 'styled-components';
import Media from '../../utils/StyleUtils';

export const SectionBio = styled.section`
  min-height: auto;
  display: flex;
  flex-flow: column nowrap;
  ${Media.tablet`
    flex-flow: row nowrap;
  `};
`;

export const BioWrapper = styled.div`
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

export const BioTextWrapper = styled(BioWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${props => props.theme.vw};
  ${Media.tablet`
    min-height: auto;
  `};
`;

export const BioTitle = styled.p`
  font-size: 4.75rem;
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.fontBold};
  letter-spacing: -1.25px;
  line-height: 5rem;
`;
