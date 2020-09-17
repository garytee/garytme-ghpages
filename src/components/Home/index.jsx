import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
// import Wrapper from '~/components/Common/Wrapper';
import { TITLE } from '~/constants';
import { Intro, Wrapper } from './styled';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import ImgWithOrient from '~/components/imageOrient';
import posed from 'react-pose';
import Img from 'gatsby-image';
import * as profileUrl from '~/resources/profilepic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPrint, FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { PREFIX, AUTHOR, EMAIL, GITHUB_ID, TWITTER_ID, FACEBOOK_ID, LINKEDIN_ID } from '~/constants';
import Card from '~/components/Common/Card';
const Image = posed.div({
  open: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 500, damping: 15 },
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
    staggerChildren: 100,
    opacity: 1
  },
  open: { x: '-100%', delay: 300, opacity: 0 }
});
const Item = posed.li({
  closed: { y: 0, opacity: 1 },
  open: { y: 20, opacity: 0 }
});
const Home = ({ portfolios, allposts }) => (
  <StaticQuery
  query={graphql`
    query HeadingQuery {
      file(relativePath: { eq: "profilepic.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 125, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
    `}
    render={data => (
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
      <Img fluid={data.file.childImageSharp.fluid} />
      </Image>
      <div className="intro">
      <h1>Gary Tietjen</h1>
      <h3>Queens, NY</h3>
      </div> 
      <List className="contactlinks" initialPose="open" pose="closed">
      <Item>    
      {GITHUB_ID ? (
        <a
        href={`https://github.com/${GITHUB_ID}`}
        target="_blank"
        rel="noreferrer noopener"
        >
        <FaGithub />
        </a>
        ) : null}
      </Item>
      <Item>
      {FACEBOOK_ID ? (
        <a
        href={`mailto:gary@garyt.me`}
        target="_blank"
        rel="noreferrer noopener"
        >
        <FaEnvelope />
        </a>
        ) : null}
      </Item>
      <Item>
      {LINKEDIN_ID ? (
        <a
        href={`https://www.linkedin.com/in/${LINKEDIN_ID}/`}
        target="_blank"
        rel="noreferrer noopener"
        >
        <FaLinkedin />
        </a>
        ) : null}
      </Item>
      </List>
      </Intro>


      </Wrapper>
      </>
      )}
      />
      );
Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
  allposts: PropTypes.arrayOf(PropTypes.shape({})),
};
Home.defaultProps = {
  portfolios: [],
  allposts: [],
};
export default Home;
