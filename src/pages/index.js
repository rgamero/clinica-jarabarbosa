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
  background: linear-gradient(-45deg, #ffffff, #ffbbb6, #f8d1dc, #fcece9);
  background-size: 400% 400%;
  background-attachment: fixed;
  background-position: ${props => props.theme.bgPosition};
  transition: background-position 0.5s ease-out;
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
        <Section>
          <Container main>
            <Logo />
          </Container>
        </Section>
        <Section ref={section2} />
        <Section ref={section3} />
        <Section ref={section4} />
      </Layout>
    </Fragment>
  );
};

export default IndexPage;
