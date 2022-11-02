import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper, PortfolioDescription, PortfolioImages, ButtonWrap } from './styled';
import { PREFIX } from '~/constants';

const Portfolio = ({ data: { portfolio: { frontmatter: { title, portfolioimages, websiteurl }, html } } }) => (
  <Wrapper>
    <Helmet>
      <title>
        {`${PREFIX}Portfolio | ${title}`}
      </title>
      <meta name="og:title" content={`${PREFIX}${title}`} />
    </Helmet>
    <PortfolioDescription>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <ButtonWrap>
        {websiteurl != null
    && (
      <AwesomeButton
        type="primary"
        size="large"
        href={websiteurl}
        target="_blank"
      >
        Visit Website&nbsp;
        <FontAwesomeIcon icon={['fal', 'arrow-right']} style={{ color: '#2464A7' }} />
      </AwesomeButton>
    )}
      </ButtonWrap>
    </PortfolioDescription>
    <PortfolioImages>
      <span className="imgwrap">
        {portfolioimages != null && portfolioimages.map((portfolioimage, i) => (
          <Img
            key={i}
            fluid={portfolioimage.childImageSharp.fluid}
            alt={title}
          />
        ))}
      </span>
    </PortfolioImages>
  </Wrapper>
);
Portfolio.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};
export default Portfolio;
