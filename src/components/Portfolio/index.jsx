import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PREFIX } from '~/constants';
import { Wrapper, PortfolioDescription, PortfolioImages } from './styled';

const Portfolio = ({ data: { portfolio: { frontmatter: { title, images, portimages }, html } } }) => (
  <Wrapper>
    <Helmet>
      <title>
        {`${PREFIX}${title.toUpperCase()}`}
      </title>
      <meta name="og:title" content={`${PREFIX}${title.toUpperCase()}`} />
    </Helmet>
    <PortfolioDescription>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </PortfolioDescription>
    <PortfolioImages>
      {portimages.map((portimage) => {
        if (portimage.includes('//')) {
          return (
            <img
              key={portimage}
              src={portimage}
              alt={title}
            />
          );
        }

        const url = require(`~/resources/${portimage}`);

        return (
          <img
            key={portimage}
            src={url}
            alt={title}
          />
        );
      })}
    </PortfolioImages>
  </Wrapper>
);

Portfolio.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default Portfolio;
