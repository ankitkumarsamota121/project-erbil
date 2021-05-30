import React from 'react';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

const SEO = () => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            twitterUsername
            siteUrl
          }
        }
      }
    `,
  );

  const {siteUrl, twitterUsername} = site.siteMetadata;

  const seo = {
    title: site.siteMetadata.title,
    description: site.siteMetadata.description,
    image: `${siteUrl}${site.siteMetadata.image}`,
    url: site.siteMetadata.siteUrl,
  };

  return (
    <Helmet title={seo.title} defaultTitle={seo.title}>
      <meta charSet="utf-8" />
      <html lang="en" />
      <link rel="canonical" href={siteUrl} />

      {/* ================ Primary Meta Tags ================  */}
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* ================ Open Graph / Facebook ================  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" itemProp="image" content={seo.image} />
      <meta property="og:image:url" content={seo.image} />
      <meta property="og:image:secure_url" content={seo.image} />
      <meta property="og:image:type" content="image/png" />

      {/* ================ Twitter ================  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seo.url} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

SEO.defaultProps = {};

export default SEO;
