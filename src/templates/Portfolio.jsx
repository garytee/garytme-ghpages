import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import Portfolio from '~/components/Portfolio';

const PortfolioTemplate = (props) => (
  <Portfolio {...props} />
);

export default PortfolioTemplate;

export const pageQuery = graphql`
  query PortfolioQuery ($path: String!) {
    site {
      siteMetadata {
        title
        author
        homepage
      }
    }
    portfolio: markdownRemark (frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        images
        websiteurl
        portfolioimages {
            childImageSharp {
                fluid(maxWidth: 540) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                }
            }
            publicURL
        }
        date
      }
    }
  }
`;
