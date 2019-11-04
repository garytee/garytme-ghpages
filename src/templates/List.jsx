import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import List from '~/components/List';

const ListTemplate = props => (
    <List {...props} />
);

export default ListTemplate;

export const pageQuery = graphql`
  query ListQuery {
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
