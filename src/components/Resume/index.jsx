import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FaPrint, FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Clearfix from '~/components/Common/Clearfix';
import { PREFIX, AUTHOR, EMAIL, GITHUB_ID, TWITTER_ID, FACEBOOK_ID, LINKEDIN_ID } from '~/constants';
import * as profileUrl from '~/resources/profilepic.png';
import { Wrapper, BasicInformation, SocialInformation, MDInformation, Button, ResumePage } from './styled';
import IconLocation from "~/components/Icons/location"
import { Link } from 'gatsby';
import Img from 'gatsby-image'
import posed from 'react-pose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const PortfolioCards = posed.ul({
  open: {
    x: '0%',
    delayChildren: 300,
    staggerChildren: 100
  },
});
const PortfolioCard = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});
const Resume = ({ data: { resume: { edges: resume } } }) => (
  <Wrapper>
  <Helmet>
  <title>
  {`${PREFIX}RESUME`}
  </title>
  <meta name="og:title" content={`${PREFIX}RESUME`} />
  </Helmet>
  <ResumePage>
  <PortfolioCards initialPose="closed" pose="open" className="portfolio_cards">
  {resume.map(({ node: { title ,company ,link ,current ,education ,location ,duration , bullets = [] } }, i) => {
    return (
      <div
      key={i}
      className={`page--resume__job${current ? " -is-current" : ""}${
        education ? " -is-education" : ""
      }`}
      >
      <h2>
      <strong>{title}</strong> at <a target="_blank" href={link}>{company}</a>
      </h2>
      <div className="page--resume__wrap">
      <div className="page--resume__details">
      <h3>{duration}</h3>
      <div className="page--resume__location">
{/*       {current && <IconLocation fill="#FF6262" />} */}
      {location}
      </div>
      </div>
      <div className="page--resume__bullets">
      <ul>
      {bullets.map((bullet, i) => (
        <li key={i}>{bullet}</li>
        ))}
      </ul>
      </div>
      </div>
      </div>
      );
  })}
  </PortfolioCards>
  </ResumePage>
  </Wrapper>
  );
Resume.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};
export default Resume;
