import React from 'react';
import {
  SectionServices,
  SectionWrapper,
  ServiceItem,
  ServicesTitle,
  ServicesText
} from './styles';
import Container from '../../../utils/Container';
import {
  Care,
  Cleaning,
  Crown,
  Filling,
  Implant,
  Orthodontics,
  Revision,
  RootCanal
} from '../../Icons';

const Services = ({ innerRef }) => (
  <SectionServices ref={innerRef}>
    <Container main>
      <ServicesTitle>Servicios</ServicesTitle>
      <SectionWrapper>
        <ServiceItem>
          <Filling />
          <ServicesText>Resinas</ServicesText>
        </ServiceItem>
        <ServiceItem>
          <Crown />
          <ServicesText>Coronas</ServicesText>
        </ServiceItem>
        <ServiceItem>
          <Implant />
          <ServicesText>Implantes</ServicesText>
        </ServiceItem>
        <ServiceItem>
          <Cleaning />
          <ServicesText>Limpiezas</ServicesText>
        </ServiceItem>
        <ServiceItem>
          <RootCanal />
          <ServicesText>Endodoncias</ServicesText>
        </ServiceItem>
        <ServiceItem>
          <Orthodontics />
          <ServicesText>Ortodoncias</ServicesText>
        </ServiceItem>
        <ServiceItem>
          <Revision />
          <ServicesText>Revisiones</ServicesText>
        </ServiceItem>
        <ServiceItem>
          <Care />
          <ServicesText>Cuidados</ServicesText>
        </ServiceItem>
      </SectionWrapper>
    </Container>
  </SectionServices>
);

export default Services;
