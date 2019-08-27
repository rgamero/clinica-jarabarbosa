/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';

function SEO({ description, lang, meta, title }) {
  const metaData = useSiteMetadata();
  const metaDescription = description || metaData.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
        itemtype: `http://schema.org/Product`,
        prefix: 'og: http://ogp.me/ns#'
      }}
      title={title}
      titleTemplate={`%s | ${metaData.title}`}
      link={[
        { rel: 'canonical', href: '' },
        { name: 'viewport', content: 'width=device-width, maximum-scale=1' }
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        { name: 'og:url', content: `` },
        {
          name: 'og:image',
          content: ''
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: metaData.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
