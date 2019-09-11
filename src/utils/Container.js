import styled, { css } from 'styled-components';
import Media from './StyleUtils';

export default styled.div`
  display: flex;
  max-width: 100rem;
  width: calc(100% - 4rem);
  margin: auto;
  ${Media.phablet`
    width: calc(100% - 7.5rem);
  `};
  ${Media.tablet`
    width: calc(100% - 12.5rem);
  `};
  ${Media.desktop`
    width: calc(100% - 15rem);
  `};
  ${Media.xxl`
    max-width: 115rem;
  `};
  ${props =>
    props.header &&
    css`
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 2rem 0;
      ${Media.handheld`
      `};
      ${Media.phablet`
      `};
      ${Media.desktop`
      `};
    `};
  ${props =>
    props.main &&
    css`
      position: relative;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      padding-top: 15rem;
    `};
  ${props =>
    props.footer &&
    css`
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      padding: 3rem;
      margin: auto;
      ${Media.tablet`
        padding: 3.5rem;
      `};
    `};
`;
