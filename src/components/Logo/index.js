import React, { useRef, useEffect } from 'react';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import Isotipo from './Isotipo';
import { LogoContainer, LogoTitle, LogoSubtitle } from './styles';

const Logo = () => {
  const tlLogo = new TimelineMax();

  // Refs
  let logoRef = useRef(null);
  let gradientRef = useRef(null);

  useEffect(() => {
    tlLogo
      .add(
        TweenMax.to(logoRef, 1, {
          y: 0,
          autoAlpha: 1
        })
      )
      .add(
        TweenMax.fromTo(
          gradientRef,
          2,
          { attr: { y1: '0', x2: '0', y2: '0' }, ease: 'Expo.easeOut' },
          {
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
        innerRef={el => {
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
