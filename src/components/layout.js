/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { TimelineMax, TweenLite, TweenMax } from 'gsap';

// Utils
import fontFiles from '../utils/fonts';
import Container from '../utils/Container';

// Hooks
import useWindowSizes from '../hooks/useWindowSizes';
import useToggleMenu from '../hooks/useToggleMenu';
import useResetMenuToggle from '../hooks/useResetMenuToggle';

// Components
import Header from './header';
import Menu from './Menu';
import './layout.css';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ${props => props.theme.fontRegular};
    font-style: normal;
    font-weight: normal;
    src: url(${fontFiles.CocoGothicWOFF}) format('woff'),
    url(${fontFiles.CocoGothicTTF}) format('truetype'),
    url(${fontFiles.CocoGothicEOT}) format('embedded-opentype'),
    url(${fontFiles.CocoGothicSVG}) format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: ${props => props.theme.fontBold};
    font-style: normal;
    font-weight: bold;
    src: url(${fontFiles.CocoGothicBoldWOFF}) format('woff'),
    url(${fontFiles.CocoGothicBoldTTF}) format('truetype'),
    url(${fontFiles.CocoGothicBoldEOT}) format('embedded-opentype'),
    url(${fontFiles.CocoGothicBoldSVG}) format('svg'); /* Legacy iOS */
  }
  * {
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    height: 100%;
  }
  body, body > * {
    min-height: ${props => props.theme.vh};
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    background: linear-gradient(-45deg, #ffffff, #ffbbb6, #f8d1dc, #fcece9);
    background-size: 400% 400%;
    background-attachment: fixed;
    font-family: ${props => props.theme.fontRegular};
  }
`;

const websiteTheme = (height, width) => {
  return {
    fontRegular: 'Coco Reg',
    fontBold: 'Coco Bold',
    primaryColor: '#9b4091',
    secondaryColor: '#4dbdc6',
    vh: `${height}px`,
    vw: `${width}px`
  };
};

const Layout = ({ children }) => {
  let menuRef = useRef(null);
  let item1 = useRef(null);
  let item2 = useRef(null);
  let item3 = useRef(null);
  let item4 = useRef(null);
  const [menuAnim, setMenuAnim] = useState(null);
  const [activeAnim, setMenuToggle] = useState(false);
  const { height, width, handleResize } = useWindowSizes();
  const { toggleMenuState, handleMenuToggle } = useToggleMenu();
  const { handleResetMenuToggle } = useResetMenuToggle();
  const tlMenu = new TimelineMax({ paused: true });

  useEffect(() => {
    setMenuToggle(true);
    handleResetMenuToggle();
  }, []);

  useEffect(() => {
    setMenuAnim(
      tlMenu
        .add(TweenLite.to(menuRef, 0.1, { zIndex: 50 }))
        .add(
          TweenLite.to(menuRef, 0.5, {
            top: 0,
            ease: 'Power4.easeOut'
          })
        )
        .add(
          TweenMax.staggerTo([item1, item2, item3, item4], 0.5, {
            y: 5,
            autoAlpha: 1,
            stagger: 0.125,
            ease: 'Power4.easeOut'
          }),
          0.2
        )
    );
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    if (toggleMenuState === 'on' && activeAnim) {
      menuAnim.play().timeScale(1);
    } else if (toggleMenuState === 'off' && activeAnim) {
      menuAnim.reverse().timeScale(1.5);
    }
  });

  return (
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
        <ThemeProvider theme={websiteTheme(height, width)}>
          <>
            <GlobalStyle />
            <Menu
              menuRef={el => {
                menuRef = el;
              }}
              item1={el => {
                item1 = el;
              }}
              item2={el => {
                item2 = el;
              }}
              item3={el => {
                item3 = el;
              }}
              item4={el => {
                item4 = el;
              }}
              toggleMenu={handleMenuToggle}
            />
            <Header
              toggleMenu={handleMenuToggle}
              siteTitle={data.site.siteMetadata.title}
            />
            <main>{children}</main>
            <footer>
              <Container footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </Container>
            </footer>
          </>
        </ThemeProvider>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
