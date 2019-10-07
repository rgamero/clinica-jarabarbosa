import React, { Fragment, useRef } from 'react';

// Utils
import Container from '../utils/Container';

// Components
import { Section } from '../components/Layout/globalStyle';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import SEO from '../components/seo';
import BioSection from '../components/BioSection';
import {
  Crown,
  Filling,
  Implant,
  Orthodontics,
  Revision,
  RootCanal
} from '../components/Icons';

const IndexPage = () => {
  // Section refs
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);

  return (
    <Fragment>
      <SEO title="Home" />
      <Layout refS2={section2} refS3={section3} refS4={section4}>
        <Section>
          <Container main>
            <Logo />
          </Container>
        </Section>
        <BioSection innerRef={section2} />
        <Section ref={section3}>
          <Crown />
          <Implant />
          <Orthodontics />
          <RootCanal />
          <Filling />
          <Revision />
        </Section>
        <Section ref={section4} />
      </Layout>
    </Fragment>
  );
};

export default IndexPage;
