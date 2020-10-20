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

// Tweens
import { MenuOpenTimeline, MenuCloseTimeline } from './tweens';

// Hooks
import useWindowSize from '../../hooks/useWindowSize';
import useHideHeader from '../../hooks/useHideHeader';
import useToggleMenu from '../../hooks/useToggleMenu';
import useLinkClick from '../../hooks/useLinkClick';
import useClientRect from '../../hooks/useClientRect';
import useScrollPosition from '../../hooks/useScrollPosition';

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

const Layout = ({ children, forwardRefS2, forwardRefS3, forwardRefS4 }) => {
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
  const { height, width } = useWindowSize();
  const { visible } = useHideHeader();
  const { toggleMenuState, handleMenuToggle } = useToggleMenu();
  const [rectS2, refS2] = useClientRect(forwardRefS2);
  const [rectS3, refS3] = useClientRect(forwardRefS3);
  const [rectS4, refS4] = useClientRect(forwardRefS4);

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
      action: useLinkClick(refS4)
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
    MenuOpenTimeline(
      tlOpenMenu,
      setMenuOpenAnim,
      menuRef,
      link1,
      link2,
      link3,
      link4,
      iconMenu,
      iconBarTop,
      iconBarBottom,
      iconBarMidL,
      iconBarMidR
    );
  }, [tlOpenMenu]);

  useEffect(() => {
    MenuCloseTimeline(
      tlCloseMenu,
      setMenuCloseAnim,
      menuRef,
      link1,
      link2,
      link3,
      link4,
      iconMenu,
      iconBarTop,
      iconBarBottom,
      iconBarMidL,
      iconBarMidR
    );
  }, [tlCloseMenu]);

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

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y >= 0 && currPos.y <= height) {
        setBgAnim(null);
      } else if (currPos.y > rectS3.y && currPos.y <= rectS4.y) {
        setBgAnim('bgAnim');
      } else {
        setBgAnim(null);
      }
    },
    [height]
  );

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
