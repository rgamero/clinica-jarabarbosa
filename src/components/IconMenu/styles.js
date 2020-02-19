import styled from 'styled-components';
import Media from '../../utils/StyleUtils';

export const IconMenuStyle = styled.svg`
  width: 2.5rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:focus,
  &:active {
    background: none;
    outline: none;
    padding: 0;
  }
  ${Media.tablet`
    width: 2.75rem;
  `};
`;
