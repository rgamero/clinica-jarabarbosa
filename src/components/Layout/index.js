/* eslint-disable import/no-extraneous-dependencies */
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
import { isIOS } from 'react-device-detect';
import gsap from 'gsap';

// Utils
import Container from '../../utils/Container';

// Hooks
import useWindowSizes from '../../hooks/useWindowSizes';
import useHideHeader from '../../hooks/useHideHeader';
import useToggleMenu from '../../hooks/useToggleMenu';
import useLinkClick from '../../hooks/useLinkClick';

// Components
import Header from '../Header';
import IconMenu from '../IconMenu';
import Menu from '../Menu';
import GlobalStyle, {
  Background,
  HeaderContainer,
  HeaderBg
} from './globalStyle';
import './layout.css';

const websiteTheme = (height, width, menuOn) => {
  return {
    fontRegular: 'Coco Reg',
    fontBold: 'Coco Bold',
    primaryColor: '#9b4091',
    secondaryColor: '#4dbdc6',
    vh: `${height}px`,
    vw: `${width}px`,
    fontSize: {
      xsm: '2.5rem',
      sm: '3rem',
      med: '3.75rem',
      big: '5rem'
    },
    ...(menuOn && !isIOS && { overflow: 'hidden' })
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
  const [bgAnim, setBgAnim] = useState(null);
  const [menuOpenAnim, setMenuOpenAnim] = useState(null);
  const [menuCloseAnim, setMenuCloseAnim] = useState(null);
  const [tlOpenMenu] = useState(gsap.timeline({ paused: true }));
  const [tlCloseMenu] = useState(gsap.timeline({ paused: true }));

  // Custom Hooks
  const { height, width } = useWindowSizes();
  const { visible } = useHideHeader();
  const { toggleMenuState, handleMenuToggle } = useToggleMenu();

  const menuOn = toggleMenuState === 'on';
  const links = [
    {
      id: 1,
      name: 'Nosotras',
      ref: el => {
        link1 = el;
      },
      action: useLinkClick(refS2)
    },
    {
      id: 2,
      name: 'Servicios',
      ref: el => {
        link2 = el;
      },
      action: useLinkClick(refS3)
    },
    {
      id: 3,
      name: 'Ubicación',
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

  // Use Effect Hooks
  useEffect(() => {
    setMenuOpenAnim(
      tlOpenMenu
        .add(
          gsap.fromTo(
            menuRef,
            {
              autoAlpha: 0
            },
            {
              duration: 0.01,
              autoAlpha: 1
            }
          )
        )
        .add(
          gsap.fromTo(
            menuRef,
            {
              yPercent: -100
            },
            {
              duration: 0.5,
              yPercent: 0,
              backgroundPosition: '0% 0%',
              force3D: false,
              ease: 'power4.easeOut'
            }
          )
        )
        .add(
          gsap.to([link1, link2, link3, link4], {
            duration: 0.5,
            y: 5,
            autoAlpha: 1,
            stagger: {
              each: 0.125,
              ease: 'power4.easeOut'
            }
          }),
          0.2
        )
        .add(
          gsap.to(iconBarTop, {
            duration: 0.2,
            y: 5
          }),
          -0.2
        )
        .add(
          gsap.to(iconBarBottom, {
            duration: 0.2,
            y: -5
          }),
          -0.2
        )
        .add(
          gsap.to(iconBarTop, {
            duration: 0.3,
            rotation: 45,
            y: 0,
            x: 10,
            transformOrigin: 'left top'
          }),
          0.1
        )
        .add(
          gsap.to(iconBarBottom, {
            duration: 0.3,
            rotation: -45,
            y: 0,
            x: 10,
            transformOrigin: 'left bottom'
          }),
          0.15
        )
        .add(
          gsap.to(iconBarMidL, {
            duration: 0.4,
            opacity: 0,
            scaleX: 0,
            transformOrigin: 'left'
          }),
          0
        )
        .add(
          gsap.to(iconBarMidR, {
            duration: 0.4,
            opacity: 0,
            scaleX: 0,
            transformOrigin: 'right'
          }),
          0
        )
        .add(
          gsap.to(iconMenu, {
            duration: 0.6,
            rotation: 180
          }),
          0
        )
    );
  }, [tlOpenMenu]);

  useEffect(() => {
    setMenuCloseAnim(
      tlCloseMenu
        .add(
          gsap.to(iconMenu, {
            duration: 0.6,
            rotation: 0
          }),
          0
        )
        .add(
          gsap.to(iconBarMidR, {
            duration: 0.4,
            opacity: 1,
            scaleX: 1,
            transformOrigin: 'right'
          }),
          0
        )
        .add(
          gsap.to(iconBarMidL, {
            duration: 0.4,
            opacity: 1,
            scaleX: 1,
            transformOrigin: 'left'
          }),
          0
        )
        .add(
          gsap.to(iconBarBottom, {
            duration: 0.3,
            rotation: 0,
            y: -5,
            x: 0,
            transformOrigin: 'left bottom'
          }),
          0.15
        )
        .add(
          gsap.to(iconBarTop, {
            duration: 0.3,
            rotation: 0,
            y: 5,
            x: 0,
            transformOrigin: 'left top'
          }),
          0.1
        )
        .add(
          gsap.to(iconBarBottom, {
            duration: 0.2,
            y: 0
          }),
          0.6
        )
        .add(
          gsap.to(iconBarTop, {
            duration: 0.2,
            y: 0
          }),
          0.6
        )
        .add(
          gsap.to([link4, link3, link2, link1], {
            duration: 0.5,
            y: -15,
            autoAlpha: 0,
            stagger: {
              each: 0.125,
              ease: 'power4.easeOut'
            }
          }),
          0.2
        )
        .add(
          gsap.to(menuRef, {
            duration: 0.5,
            yPercent: -100,
            backgroundPosition: '50% 50%',
            force3D: false,
            ease: 'power4.easeOut'
          })
        )
        .add(
          gsap.fromTo(
            menuRef,
            {
              autoAlpha: 1
            },
            {
              duration: 0.01,
              autoAlpha: 0
            }
          )
        )
    );
  }, [tlCloseMenu]);

  useEffect(() => {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    if (scrollTop >= 0 && scrollTop <= height) {
      setBgAnim(null);
    } else if (scrollTop > height * 2.5 && scrollTop <= height * 4) {
      setBgAnim('bgAnim');
    } else {
      setBgAnim(null);
    }
  });

  useLayoutEffect(() => {
    if (menuOn) {
      menuOpenAnim.play(0, false);
      if (isIOS) {
        setTimeout(() => {
          document.body.style.position = 'fixed';
        }, 600);
      }
    } else if (toggleMenuState === 'off') {
      menuCloseAnim.timeScale(1.5).play(0, false);
      if (isIOS) {
        document.body.style.position = '';
      }
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
            <Background bgAnim={bgAnim} />
            <HeaderContainer visible={visible}>
              <HeaderBg bgAnim={bgAnim} />
              <Header
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
              <Menu
                menuRef={el => {
                  menuRef = el;
                }}
                menuLinks={links}
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
