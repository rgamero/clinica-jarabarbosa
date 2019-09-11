import React from 'react';
import { IconMenuStyle } from './styles';

const IconMenu = ({
  iconMenu,
  iconBarTop,
  iconBarBottom,
  iconBarMidL,
  iconBarMidR,
  toggleMenu
}) => (
  <IconMenuStyle
    version="1.1"
    ref={iconMenu}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 6 64 54.8"
    onClick={toggleMenu}
  >
    <path
      ref={iconBarBottom}
      d="M6.8,49.1h51.1c1.2,0,2.2,1.3,2.2,2.8l0,0c0,1.5-1,2.8-2.2,2.8H6.8c-1.2,0-2.2-1.3-2.2-2.8l0,0
C4.6,50.3,5.6,49.1,6.8,49.1z"
    />

    <path
      ref={iconBarTop}
      d="M6.8,12h51.1c1.2,0,2.2,1.2,2.2,2.7l0,0c0,1.5-1,2.7-2.2,2.7H6.8c-1.2,0-2.2-1.2-2.2-2.7l0,0
C4.6,13.2,5.6,12,6.8,12z"
    />

    <path
      ref={iconBarMidL}
      d="M6.8,30.7c-1.2,0-2.2,1.2-2.2,2.7s1,2.7,2.2,2.7h25.4v-5.4H6.8z"
    />

    <path
      ref={iconBarMidR}
      d="M57.9,30.7h-26v5.4h26c1.2,0,2.2-1.2,2.2-2.7S59.1,30.7,57.9,30.7z"
    />
  </IconMenuStyle>
);

export default IconMenu;
