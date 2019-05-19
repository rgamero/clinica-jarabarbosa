/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import fontFiles from '../utils/fonts';
import Header from './header';
import Container from '../utils/Container';
import './layout.css';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Coco Reg";
    font-style: normal;
    font-weight: normal;
    src: url(${fontFiles.CocoGothicWOFF}) format('woff'),
    url(${fontFiles.CocoGothicTTF}) format('truetype'),
    url(${fontFiles.CocoGothicEOT}) format('embedded-opentype'),
    url(${fontFiles.CocoGothicSVG}) format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: "Coco Bold";
    font-style: normal;
    font-weight: bold;
    src: url(${fontFiles.CocoGothicBoldWOFF}) format('woff'),
    url(${fontFiles.CocoGothicBoldTTF}) format('truetype'),
    url(${fontFiles.CocoGothicBoldEOT}) format('embedded-opentype'),
    url(${fontFiles.CocoGothicBoldSVG}) format('svg'); /* Legacy iOS */
  }
  html {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: #fafafa;
    font-family: ${props => props.theme.fontFamily};
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={{ fontFamily: 'Coco Reg' }}>
        <>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Container main>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </Container>
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
