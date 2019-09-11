import React, { Fragment, useRef } from 'react';
import styled from 'styled-components';

// Utils
import Container from '../utils/Container';

// Components
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import SEO from '../components/seo';

const Section = styled.section`
  min-height: 100vh;
  background-color: ${props => props.color};
`;

const IndexPage = () => {
  // Section refs
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);

  return (
    <Fragment>
      <SEO title="Home" />
      <Layout refS2={section2} refS3={section3} refS4={section4}>
        <Section color="transparent">
          <Container main>
            <Logo />
          </Container>
        </Section>
        <Section color="red" />
        <Section ref={section2} color="blue" />
        <Section ref={section3} color="yellow" />
        <Section ref={section4} color="pink" />
      </Layout>
    </Fragment>
  );
};

export default IndexPage;
