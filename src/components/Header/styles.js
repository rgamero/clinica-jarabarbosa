import styled from 'styled-components';
import Media from '../../utils/StyleUtils';

export const HeaderWrapper = styled.header`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const HeaderTitle = styled.h1`
  color: ${props => props.theme.primaryColor}};
  letter-spacing: -1px;
  font-size: 2.75rem;
  ${Media.tablet`
    font-size: 3.5rem;
  `};
`;
