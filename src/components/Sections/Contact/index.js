import React from 'react';
import { SectionContact } from './styles';
import LeafletMap from '../../Map';

const Contact = ({ innerRef }) => (
  <SectionContact ref={innerRef}>
    <LeafletMap />
  </SectionContact>
);

export default Contact;
