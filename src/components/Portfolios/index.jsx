import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
// import PortfolioCard from '~/components/Common/PortfolioCard';
import { PREFIX } from '~/constants';
import { Wrapper } from './styled';
import Img from 'gatsby-image'
import posed from 'react-pose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PortfolioCards = posed.ul({
  open: {
    x: '0%',
    delayChildren: 300,
    staggerChildren: 100
  },
  // closed: { x: '-100%', delay: 300 }
});

const PortfolioCard = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

const Portfolios = ({ data: { portfolios: { edges: portfolios } } }) => (
  <Wrapper>
    <Helmet>
      <title>
        {`${PREFIX}PORTFOLIO`}
      </title>
      <meta name="og:title" content={`${PREFIX}PORTFOLIOS`} />
    </Helmet>
    <PortfolioCards initialPose="closed" pose="open" className="portfolio_cards">
    {portfolios.map(({ node: { frontmatter: { portfoliosimages, path, title = [] } } }) => {
        return (
          <PortfolioCard initialPose="closed" pose="open" className="portfolio_card" key={path}>
            <Link to={path}>




      {portfoliosimages != null && portfoliosimages.map((portfoliosimage, i) => {

        return (
          <Img
            key={i}
            fluid={portfoliosimage.childImageSharp.fluid}
            alt={title}
          />
        );
      })}



            </Link>
          </PortfolioCard>
        );

      return (
        <PortfolioCard key={path}>
          <Link to={path}>
            <h4>
              {title}
            </h4>
          </Link>
        </PortfolioCard>
      );
    })}
    </PortfolioCards>
  </Wrapper>
);

Portfolios.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Portfolios;
