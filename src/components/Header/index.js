import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../utils/Container';
import { HeaderWrapper, HeaderTitle } from './styles';

const Header = ({ bgAnim, visible, siteTitle, menuIcon }) => {
  return (
    <HeaderWrapper bgAnim={bgAnim} visible={visible}>
      <Container header>
        <HeaderTitle>{siteTitle}</HeaderTitle>
        {menuIcon}
      </Container>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  visible: PropTypes.bool,
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  visible: true,
  siteTitle: ``
};

export default Header;
