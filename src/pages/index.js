import React, { Fragment } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

// Utils
import Container from '../utils/Container';

// Components
import Layout from '../components/layout';
import Logo from '../components/Logo';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Fragment>
      <SEO title="Home" />
      <Layout>
        <Container main>
          <Logo />
          <AniLink paintDrip to="/page-2" hex="#663399" duration={0.8}>
            Go to Page 2
          </AniLink>
        </Container>
      </Layout>
    </Fragment>
  );
};

export default IndexPage;
