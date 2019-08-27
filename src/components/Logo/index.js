import React from 'react';
import Isotipo from './Isotipo';
import { LogoContainer, LogoTitle, LogoSubtitle } from './styles';

const Logo = () => (
  <LogoContainer>
    <Isotipo />
    <LogoSubtitle>Clínica odontológica</LogoSubtitle>
    <LogoTitle>
      Jara <LogoTitle secColor>&</LogoTitle> Barbosa
    </LogoTitle>
  </LogoContainer>
);

export default Logo;
