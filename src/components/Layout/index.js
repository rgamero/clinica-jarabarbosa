/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { TimelineMax, TweenMax, TweenLite } from 'gsap';

// Utils
import Container from '../../utils/Container';

// Hooks
import useWindowSizes from '../../hooks/useWindowSizes';
import useHideHeader from '../../hooks/useHideHeader';
import useToggleMenu from '../../hooks/useToggleMenu';
import useResetMenuToggle from '../../hooks/useResetMenuToggle';
import useLinkClick from '../../hooks/useLinkClick';

// Components
import Header from '../Header';
import IconMenu from '../IconMenu';
import Menu from '../Menu';
import GlobalStyle, { HeaderContainer } from './globalStyle';
import './layout.css';

const websiteTheme = (height, width, menuOn) => {
  return {
    fontRegular: 'Coco Reg',
    fontBold: 'Coco Bold',
    primaryColor: '#9b4091',
    secondaryColor: '#4dbdc6',
    vh: `${height}px`,
    vw: `${width}px`,
    ...(menuOn && { overflow: 'hidden' })
  };
};

const Layout = ({ children, refS2, refS3, refS4 }) => {
  // Refs
  let menuRef = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);
  let link3 = useRef(null);
  let link4 = useRef(null);
  let iconMenu = useRef(null);
  let iconBarTop = useRef(null);
  let iconBarBottom = useRef(null);
  let iconBarMidL = useRef(null);
  let iconBarMidR = useRef(null);

  // State Hooks
  const [menuAnim, setMenuAnim] = useState(null);
  const [activeAnim, setMenuToggle] = useState(false);

  // Custom Hooks
  const { height, width, handleResize } = useWindowSizes();
  const { visible, handleScroll } = useHideHeader();
  const { toggleMenuState, handleMenuToggle } = useToggleMenu();
  const { handleResetMenuToggle } = useResetMenuToggle();

  const tlMenu = new TimelineMax({ paused: true });
  const menuOn = toggleMenuState === 'on';
  const links = [
    {
      id: 1,
      name: 'Amparo',
      ref: el => {
        link1 = el;
      },
      action: useLinkClick(refS2)
    },
    {
      id: 2,
      name: 'Manuela',
      ref: el => {
        link2 = el;
      },
      action: useLinkClick(refS2)
    },
    {
      id: 3,
      name: 'Servicios',
      ref: el => {
        link3 = el;
      },
      action: useLinkClick(refS3)
    },
    {
      id: 4,
      name: 'Contacto',
      ref: el => {
        link4 = el;
      },
      action: useLinkClick(refS4)
    }
  ];

  useEffect(() => {
    setMenuToggle(true);
    handleResetMenuToggle();
  }, []);

  useEffect(() => {
    setMenuAnim(
      tlMenu
        .add(
          TweenLite.to(menuRef, 0.5, {
            zIndex: 20,
            y: 0,
            ease: 'Power4.easeOut'
          })
        )
        .add(
          TweenMax.staggerTo([link1, link2, link3, link4], 0.5, {
            y: 5,
            autoAlpha: 1,
            stagger: 0.125,
            ease: 'Power4.easeOut'
          }),
          0.2
        )
        .add(
          TweenLite.to(iconBarTop, 0.2, {
            y: 5
          }),
          -0.2
        )
        .add(
          TweenLite.to(iconBarBottom, 0.2, {
            y: -5
          }),
          -0.2
        )
        .add(
          TweenLite.to(iconBarTop, 0.3, {
            rotation: 45,
            y: 0,
            x: 10,
            transformOrigin: 'left top'
          }),
          0.15
        )
        .add(
          TweenLite.to(iconBarBottom, 0.3, {
            rotation: -45,
            y: 0,
            x: 10,
            transformOrigin: 'left bottom'
          }),
          0.15
        )
        .add(
          TweenLite.to(iconBarMidL, 0.4, {
            opacity: 0,
            scaleX: 0,
            transformOrigin: 'left'
          }),
          0
        )
        .add(
          TweenLite.to(iconBarMidR, 0.4, {
            opacity: 0,
            scaleX: 0,
            transformOrigin: 'right'
          }),
          0
        )
        .add(
          TweenLite.to(iconMenu, 0.6, {
            rotation: 180
          }),
          0.1
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useLayoutEffect(() => {
    if (menuOn && activeAnim) {
      menuAnim.play().timeScale(1);
    } else if (toggleMenuState === 'off' && activeAnim) {
      menuAnim.reverse().timeScale(1.5);
    }
  }, [menuOn]);

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
        <ThemeProvider theme={websiteTheme(height, width, menuOn)}>
          <>
            <GlobalStyle />
            <HeaderContainer>
              <Menu
                menuRef={el => {
                  menuRef = el;
                }}
                menuLinks={links}
              />
              <Header
                visible={visible}
                siteTitle={data.site.siteMetadata.title}
                menuIcon={
                  <IconMenu
                    iconMenu={el => {
                      iconMenu = el;
                    }}
                    iconBarTop={el => {
                      iconBarTop = el;
                    }}
                    iconBarBottom={el => {
                      iconBarBottom = el;
                    }}
                    iconBarMidL={el => {
                      iconBarMidL = el;
                    }}
                    iconBarMidR={el => {
                      iconBarMidR = el;
                    }}
                    toggleMenu={handleMenuToggle}
                  />
                }
              />
            </HeaderContainer>
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
