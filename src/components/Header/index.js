import PropTypes from 'prop-types';
import React from 'react';
import Container from '../../utils/Container';
import { HeaderWrapper, HeaderTitle } from './styles';

const Header = ({ visible, siteTitle, menuIcon }) => (
  <HeaderWrapper visible={visible}>
    <Container header>
      <HeaderTitle>{siteTitle}</HeaderTitle>
      {menuIcon}
    </Container>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
