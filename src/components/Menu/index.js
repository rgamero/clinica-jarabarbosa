import React from 'react';
import { MenuNav, MenuContainer, MenuList, MenuItem } from './styles';

const Menu = ({ menuRef, menuLinks }) => (
  <MenuNav ref={menuRef}>
    <MenuContainer>
      <MenuList>
        {menuLinks.map(link => (
          <MenuItem key={link.id} ref={link.ref} onClick={link.action.toScroll}>
            {link.name}
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  </MenuNav>
);

export default Menu;
