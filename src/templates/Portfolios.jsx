import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import Portfolios from '~/components/Portfolios';

const PortfoliosTemplate = props => (
  <Layout {...props}>
    <Portfolios {...props} />
  </Layout>
);

export default PortfoliosTemplate;

export const pageQuery = graphql`
  query PortfoliosQuery {
    site {
      siteMetadata {
        title
        author
        homepage
      }
    }
    portfolios: allMarkdownRemark (
      filter: {
        frontmatter: {
          type: { eq: "portfolio" }
          hide: { ne: true }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            type
            title
            path
            images
            portfoliosimages {
            childImageSharp {
                fluid(maxWidth: 540, quality: 72) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                }
            }
            publicURL
        }
            date
          }
        }
      }
    }
  }
`;
