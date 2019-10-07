import React from 'react';
import Image from '../image';
import { SectionBio, BioWrapper, BioTextWrapper, BioTitle } from './styles';

const BioSection = ({ innerRef }) => (
  <>
    <SectionBio ref={innerRef}>
      <BioWrapper>
        <Image />
      </BioWrapper>
      <BioTextWrapper>
        <BioTitle>Laura Jara</BioTitle>
      </BioTextWrapper>
    </SectionBio>
    <SectionBio>
      <BioWrapper inverseOrder>
        <Image />
      </BioWrapper>
      <BioTextWrapper>
        <BioTitle>Andrea Barbosa</BioTitle>
      </BioTextWrapper>
    </SectionBio>
  </>
);

export default BioSection;
