import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { faCheckSquare, faCoffee, fas } from '@fortawesome/pro-solid-svg-icons';
import App from '~/components/App';
import { POST, PORTFOLIO, FEATURED } from '~/constants';

import getPosts from '~/utils/getPosts';


library.add(fab, fas, fal, faCheckSquare, faCoffee);

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query GatsbyQuery {
        posts: allMarkdownRemark(
          filter: { frontmatter: { hide: { ne: true } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ){
          edges {
            node {
              frontmatter {
                path
                type
                title
                category
                summary
                tags
                images
                portfoliosimages {
            childImageSharp {
                fluid(maxWidth: 200, quality: 72) {
                    aspectRatio
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                }
            }
            publicURL
        }
                heroimages {
            childImageSharp {
                fluid(maxWidth: 200, quality: 72) {
                    aspectRatio
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
    `}
    render={({ posts }) => {
      const { edges } = posts;
      const allposts = edges.filter(({ node: { frontmatter: { type } } }) => type === FEATURED);
      const portfolios = edges.filter(({ node: { frontmatter: { type } } }) => type === PORTFOLIO);
      const categories = edges.reduce((categories, { node }) => {
        const { category } = node.frontmatter;

        if (category === null) {
          return categories;
        }

        const [{ length: total }] = categories;
        const categoryIndex = categories.findIndex(({ key }) => key === category);

        if (categoryIndex === -1) {
          return [
            { key: '__ALL__', length: total + 1 },
            ...categories.slice(1),
            { key: category, length: 1 },
          ];
        }

        return [
          { key: '__ALL__', length: total + 1 },
          ...categories.slice(1, categoryIndex - 1),
          { key: category, length: categories[categoryIndex].length + 1 },
          ...categories.slice(categoryIndex + 1),
        ];
      }, [{ key: '__ALL__', length: 0 }]);
      const postInformations = edges.reduce((postInformations, { node: { frontmatter } }) => {
        const { type, path, title, summary, tags = [], category } = frontmatter;

        if (type === POST || type === null) {
          return [
            ...postInformations,
            {
              path,
              title,
              summary,
              tags,
              category,
            },
          ];
        }

        return postInformations;
      }, []);

      const hasPortfolio = portfolios.length > 0;

      const childrenWithProps = Children.map(children, (child) => cloneElement(child, { portfolios, allposts }));

      return (
        <App
          location={location}
          categories={categories}
          postInformations={postInformations}
          hasPortfolio={hasPortfolio}
        >
          {childrenWithProps}
        </App>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

export default Layout;
