import { css } from 'styled-components';

const mediaQuery = (...query) => (...rules) => css`
  @media ${css(...query)} {
    ${css(...rules)};
  }
`;

const sizes = {
  mobile: 360,
  phablet: 480,
  tablet: 768,
  desktop: 1024,
  giant: 1369,
  xxl: 1620
};

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
const Media = {
  handheld: mediaQuery`(min-width: ${(sizes.mobile + 1) / 16}em)`,
  phablet: mediaQuery`(min-width: ${sizes.phablet / 16}em)`,
  tablet: mediaQuery`(min-width: ${sizes.tablet / 16}em)`,
  tabletOnly: mediaQuery`(min-width: ${sizes.tablet /
    16}em) and (max-width: ${(sizes.desktop - 1) / 16}em)`,
  desktop: mediaQuery`(min-width: ${sizes.desktop / 16}em)`,
  giant: mediaQuery`(min-width: ${sizes.giant / 16}em)`,
  xxl: mediaQuery`(min-width: ${sizes.xxl / 16}em)`,
  minWidth: pxValue => mediaQuery`(min-width: ${pxValue / 16}em)`,
  print: mediaQuery`print`
};

export default Media;
