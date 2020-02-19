import React from 'react';
import Image from '../../image';
import {
  SectionBio,
  BioImgWrapper,
  BioTextWrapper,
  BioTitle,
  BioDescription
} from './styles';

const Bio = ({ innerRef }) => (
  <>
    <SectionBio ref={innerRef}>
      <BioImgWrapper>
        <Image />
      </BioImgWrapper>
      <BioTextWrapper>
        <BioTitle>Laura Jara</BioTitle>
        <BioDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat
          finibus enim, nec euismod elit. Pellentesque fringilla, libero quis
          rutrum condimentum, neque nisl interdum enim, eget ullamcorper lacus
          lorem sit amet quam. Vestibulum ac vestibulum diam.
        </BioDescription>
      </BioTextWrapper>
    </SectionBio>
    <SectionBio>
      <BioImgWrapper inverseOrder>
        <Image />
      </BioImgWrapper>
      <BioTextWrapper>
        <BioTitle>Andrea Barbosa</BioTitle>
        <BioDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat
          finibus enim, nec euismod elit. Pellentesque fringilla, libero quis
          rutrum condimentum, neque nisl interdum enim, eget ullamcorper lacus
          lorem sit amet quam. Vestibulum ac vestibulum diam.
        </BioDescription>
      </BioTextWrapper>
    </SectionBio>
  </>
);

export default Bio;
