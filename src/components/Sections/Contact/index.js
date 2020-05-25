import React from 'react';
import { SectionContact } from './styles';
import LeafletMap from '../../Map';

const Contact = ({ forwardRef }) => (
  <SectionContact ref={forwardRef}>
    <LeafletMap />
  </SectionContact>
);

export default Contact;
