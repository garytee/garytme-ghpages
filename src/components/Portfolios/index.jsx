import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { PREFIX } from '~/constants';
import { Wrapper } from './styled';
import Img from 'gatsby-image'
import posed from 'react-pose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { PortImage, PortfolioCards, PortfolioCard, PortfolioWrapper } from './styled';

import ImgWithOrient from '~/components/imageOrient';


const Portfolios = ({
  data: {
    portfolios: { edges: portfolios },
  },
}) => (
  <Wrapper>
    <Helmet>
      <title>{`${PREFIX}Portfolio`}</title>
      <meta name="og:title" content={`${PREFIX}Portfolio`} />
    </Helmet>

    {/* <div className="projects-wrapper"> */}
    <PortfolioWrapper>
      <PortfolioCards className="portfolio_cards">
        {portfolios.map(
          ({
            node: {
              frontmatter: { portfoliosimages, path, title = [] },
            },
          }) => {
            return (
              <PortfolioCard className="portfolio_card" key={path}>
                <Link to={path}>
                  {portfoliosimages != null &&
                    portfoliosimages.map((portfoliosimage, i) => {
                      return (
                        <PortImage key={path}>
                          <ImgWithOrient
                            key={path}
                            aspectRatio={
                              portfoliosimage.childImageSharp.fluid.aspectRatio
                            }
                            alt={portfoliosimage.name}
                            fluid={portfoliosimage.childImageSharp.fluid}
                          />
                        </PortImage>
                      );
                    })}
                </Link>
              </PortfolioCard>
            );
          }
        )}
      </PortfolioCards>
      {/* </div> */}
    </PortfolioWrapper>
  </Wrapper>
);
Portfolios.propTypes = {
  data: PropTypes.shape({}).isRequired,
};
export default Portfolios;
