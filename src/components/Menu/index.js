import React from 'react';
import { MenuNav, MenuContainer, MenuList, MenuItem } from './styles';

const Menu = ({ menuRef, item1, item2, item3, item4, toggleMenu }) => (
  <MenuNav ref={menuRef}>
    <MenuContainer>
      <MenuList>
        <MenuItem ref={item1}>Servicios</MenuItem>
        <MenuItem ref={item2}>Amparo</MenuItem>
        <MenuItem ref={item3}>Manuela</MenuItem>
        <MenuItem ref={item4}>Juemadre</MenuItem>
      </MenuList>
      <button type="button" onClick={toggleMenu}>
        Menu
      </button>
    </MenuContainer>
  </MenuNav>
);

export default Menu;
