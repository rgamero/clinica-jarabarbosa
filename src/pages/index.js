import React, { useRef } from 'react';

// Utils
import Container from '../utils/Container';

// Components
import { Section } from '../components/Layout/globalStyle';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import SEO from '../components/seo';
import Bio from '../components/Sections/Bio';
import Services from '../components/Sections/Services';
import Contact from '../components/Sections/Contact';

const IndexPage = () => {
  // Section refs
  const sect2 = useRef(null);
  const sect3 = useRef(null);
  const sect4 = useRef(null);

  return (
    <>
      <SEO title="Home" />
      <Layout forwardRefS2={sect2} forwardRefS3={sect3} forwardRefS4={sect4}>
        <Section>
          <Container main>
            <Logo />
          </Container>
        </Section>
        <Bio forwardRef={sect2} />
        <Services forwardRef={sect3} />
        <Contact forwardRef={sect4} />
      </Layout>
    </>
  );
};

export default IndexPage;
