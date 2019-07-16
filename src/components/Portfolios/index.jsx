import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
// import PortfolioCard from '~/components/Common/PortfolioCard';
import { PREFIX } from '~/constants';
import { Wrapper } from './styled';


// const Item = posed.li({
//   closed: { y: 0, opacity: 1 },
//   open: { y: 20, opacity: 0 }
// });

import posed from 'react-pose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// // const PortfolioCards = posed.ul({
// //   closed: {
// //     x: '0%',
// //     delayChildren: 1000,
// //     staggerChildren: 100
// //   },
// //   open: { 
// //     x: '-100%', 
// //     delay: 300,
// //     delayChildren: 1000,
// //     staggerChildren: 100
// //   }
// // });


// const PortfolioCards = posed.ul({
//   closed: {
//     x: '0%',
//     delayChildren: 1000,
//     staggerChildren: 100
//   },
//   open: { x: '-100%', delayChildren: 5000,
//     staggerChildren: 100 }
// });

// // const PortfolioCard = posed.li({
// //   closed: { y: 0, opacity: 1 },
// //   open: { y: 20, opacity: 0 }
// // });

// const PortfolioCards = posed.ul({
//   open: {
//     x: '0%',
//     delayChildren: 200,
//     staggerChildren: 50
//   },
//   closed: { x: '-100%', delay: 300 }
// });

// const PortfolioCard = posed.li({
//   open: { y: 0, opacity: 1 },
//   closed: { y: 20, opacity: 0 }
// });


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
    {portfolios.map(({ node: { frontmatter: { path, title, images = [] } } }) => {
      const [image = null] = images;

      if (image !== null) {
        return (
          <PortfolioCard initialPose="closed" pose="open" className="portfolio_card" key={path}>
            <Link to={path}>
              {image.includes('//') ? (
                <img src={image} alt="portfolio" />
              ) : (
                <img src={require(`~/resources/${image}`)} alt="portfolio" />
              )}
{/*               <h6> */}
{/*                 {title} */}
{/*               </h6> */}
            </Link>
          </PortfolioCard>
        );
      }

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
