import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import CategorizedList from '~/components/CategorizedList';

const CategorizedListTemplate = (props) => (
  <CategorizedList {...props} />
);

export default CategorizedListTemplate;

export const pageQuery = graphql`
  query CategorizedListQuery {
    site {
      siteMetadata {
        title
        author
        homepage
      }
    }
    posts: allMarkdownRemark (
      filter: { frontmatter: { hide: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            type
            title
            category
            images
            heroimages {
            childImageSharp {
                fluid(maxWidth: 720) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                }
            }
            publicURL
        }
            path
            tags
            date
            summary
          }
        }
      }
    }
  }
`;
