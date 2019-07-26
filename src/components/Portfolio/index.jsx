import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PREFIX } from '~/constants';
import { Wrapper, PortfolioDescription, PortfolioImages } from './styled';
import Img from 'gatsby-image'
const Portfolio = ({ data: { portfolio: { frontmatter: { title, portfolioimages }, html } } }) => (
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
  <span className="imgwrap">
{/*   {attachments != null && attachments.map((attachment, i) => { */}
{/*     return ( */}
{/*       <Img */}
{/*       key={i} */}
{/*       fluid={attachment.childImageSharp.fluid} */}
{/*       alt={title} */}
{/*       /> */}
{/*       ); */}
{/*   })} */}

  {portfolioimages != null && portfolioimages.map((portfolioimage, i) => {
    return (
      <Img
      key={i}
      fluid={portfolioimage.childImageSharp.fluid}
      alt={title}
      />
      );
  })}

  </span>
  </PortfolioImages>
  </Wrapper>
  );
Portfolio.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};
export default Portfolio;
