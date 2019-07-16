import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
// import SimpleWrapper from '~/components/Common/SimpleWrapper';
// import PortfolioCard from '~/components/Common/PortfolioCard';
import { TITLE } from '~/constants';
import { Title, Intro } from './styled';
import posed from 'react-pose';
import Img from 'gatsby-image';
import * as profileUrl from '~/resources/profilepic.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Image = posed.div({
  // closed: { x: "100px", delay: 3000 },
  // open: { x: "0px", delay: 3000 },
  // // enter: { x: "100px", delay: 3000 },
  // exit: { x: "0px" },

    open: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 500, damping: 15 },
      // y: { ease: 'easeIn' },
      default: { duration: 300 }
    }
  },
  closed: {
    y: -50,
    opacity: 0,
    transition: { duration: 150 }
  }
});


const List = posed.ul({
  closed: {
    x: '0%',
    delayChildren: 1000,
    staggerChildren: 100
  },
  open: { x: '-100%', delay: 300 }
});

const Item = posed.li({
  closed: { y: 0, opacity: 1 },
  open: { y: 20, opacity: 0 }
});


const Home = ({ portfolios }) => (
  <>
    <Helmet>
      <title>
        {TITLE}
      </title>
      <meta name="og:title" content={TITLE} />
    </Helmet>
    <Wrapper isHome>
      <Intro>
          <Image initialPose="closed" pose="open"  className="selfie">
    <img
            src={profileUrl.default}
            alt=""
            width="150"
            height="150"
          />
          </Image>
       <div className="intro">
           <h1>Welcome to my website</h1>
{/*     <h1>I'm Gary. I <span role="img" aria-label="love">&#10084;</span> making things!</h1>  */}
    <p>I'm Gary, I make websites and other fun stuff</p>

 </div> 

     <List className="contactlinks" initialPose="open" pose="closed">
      <Item><FontAwesomeIcon icon={["fab", "facebook"]} style={{color:"#2464A7"}} size="lg" /></Item>
      <Item><FontAwesomeIcon icon={["fab", "linkedin"]} style={{color:"#2464A7"}} size="lg" /></Item>
      <Item><FontAwesomeIcon icon={["fas", "envelope"]} style={{color:"#2464A7"}} size="lg" /></Item>
    </List>

 </Intro>
 
      <Title>
{/*         Hello, Blog! */}
      </Title>
    </Wrapper>
          

  </>
);

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;
