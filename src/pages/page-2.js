import React, { Fragment } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

// Utils
import Container from '../utils/Container';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Fragment>
    <SEO title="Page two" />
    <Layout>
      <Container main>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <AniLink fade to="/" duration={0.4}>
          Go back to the homepage
        </AniLink>
      </Container>
    </Layout>
  </Fragment>
);

export default SecondPage;
