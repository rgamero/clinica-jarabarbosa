import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Isotipo from './Isotipo';
import { LogoContainer, LogoTitle, LogoSubtitle } from './styles';

const Logo = () => {
  // Timeline
  const tlLogo = gsap.timeline();

  // Refs
  let logoRef = useRef(null);
  let gradientRef = useRef(null);

  useEffect(() => {
    tlLogo
      .add(
        gsap.to(logoRef, {
          duration: 1,
          y: 0,
          autoAlpha: 1
        })
      )
      .add(
        gsap.fromTo(
          gradientRef,
          { attr: { y1: '0', x2: '0', y2: '0' }, ease: 'Expo.easeOut' },
          {
            duration: 2,
            attr: { y1: '151.15', x2: '65', y2: '41.64' },
            ease: 'Expo.easeOut'
          }
        ),
        0.35
      );
  }, []);

  return (
    <LogoContainer
      ref={el => {
        logoRef = el;
      }}
    >
      <Isotipo
        forwardRef={el => {
          gradientRef = el;
        }}
      />
      <LogoSubtitle>Clínica odontológica</LogoSubtitle>
      <LogoTitle>
        Jara <LogoTitle secColor>&</LogoTitle> Barbosa
      </LogoTitle>
    </LogoContainer>
  );
};

export default Logo;
