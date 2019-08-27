import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from '../utils/Container';

const Header = ({ siteTitle, toggleMenu }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <Container header>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <button type="button" onClick={toggleMenu}>
        Menu
      </button>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
