import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
import { TITLE } from '~/constants';
import { Title, Intro, Welcome, PortfolioCards, PortfolioCard, PortImage } from './styled';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import ImgWithOrient from '~/components/imageOrient';
import posed from 'react-pose';
import Img from 'gatsby-image';
import * as profileUrl from '~/resources/profilepic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPrint, FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
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
      <Welcome>
      <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <Intro>
      <Image initialPose="closed" pose="open"  className="selfie">
      <Img fluid={data.file.childImageSharp.fluid} />
      </Image>
      <div className="intro">
      <h1>Gary Tietjen</h1>
{/*       <h2>Web Developer</h2> */}
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
      {TWITTER_ID ? (
        <a
        href={`https://twitter.com/${TWITTER_ID}`}
        target="_blank"
        rel="noreferrer noopener"
        >
        <FaTwitter />
        </a>
        ) : null}
      </Item>
      <Item>
      {FACEBOOK_ID ? (
        <a
        href={`https://www.facebook.com/${FACEBOOK_ID}`}
        target="_blank"
        rel="noreferrer noopener"
        >
        <FaFacebook />
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
      </header>
      <section id="about">
      <div className="wrapper">
      <article>
      <div className="title">
      <h3>Who's this guy?</h3>
      <p className="separator" />
      </div>
      <div className="desc full">
{/*       <h4 className="subtitle">My name is Gary.</h4> */}
      <p>
      I am a web developer & business owner based in the Queens, NY.
      </p>
      <p>
      I really enjoy solving problems as well as making things pretty and easy to use. I
      can't stop learning new things; the more, the better. I also love playing music, 3D printing, investing, & home automation.
      </p>
      </div>
      <div className="title">
      <h3>What does he do?</h3>
      <p className="separator" />
      </div>
      <div className="desc">
      <h4 className="subtitle">I'm a programmer.</h4>
      <p>
      Being a programmer has given me the tools to make great websites for my clients as well as streamline many aspects of my personal life. I have a solid understanding of both the front & back end of projects I undertake. Many of my clients are small businesses, and for these projects I mainly code in PHP & Javascript because Wordpress is well understood and makes it much easier for my clients to update their own web pages.
      </p>
      <p>
      For my personal projects, I use whatever is best suited for the job. For projects that require a Raspberry Pi or if I'm making changes to my self driving car, I code in Python. If a project requires an Arduino, I'm using C/C++. 
      </p>
      </div>
      <div className="desc">
      <h4 className="subtitle">Also a project manager.</h4>
      <p>
      I enjoy working with clients just as much as programming. My background in business as well as programming allows me to give clients insight into how projects will be carried out and completed in a timely manner.
      </p>
      <p>
      I've surprised myself by how much I enjoy managing my client's projects. As much as I love programming, I really like brainstorming certain ideas and being able to explain exactly how that idea will come into fruition (specifically time, cost, and ease of use). 
      </p>
      </div>
      </article>
      </div>
      </section>
      <section id="projects">
      <div className="projects-container">
      <div className="heading">
      <h3 className="title">Client Work</h3>
      <p className="separator" />
      </div>
      <div className="projects-wrapper">
      <PortfolioCards className="portfolio_cards">
      {portfolios.map(({ node: { frontmatter: { portfoliosimages, path, title = [] } } }) => {
        return (
          <PortfolioCard className="portfolio_card" key={path}>
          <Link to={path}>
          {portfoliosimages != null && portfoliosimages.map((portfoliosimage, i) => {
            return (
              <PortImage key={path}>
              <ImgWithOrient
              key={path}
              aspectRatio={portfoliosimage.childImageSharp.fluid.aspectRatio}
              alt={portfoliosimage.name}
              fluid={portfoliosimage.childImageSharp.fluid}
              />
              </PortImage>
              );
          })}
          </Link>
          </PortfolioCard>
          );
      })}
      </PortfolioCards>
      </div>
      </div>
      </section>
{/*       <section id="about"> */}
{/*       <div className="wrapper"> */}
{/*       <article> */}
{/*       <div className="title"> */}
{/*       <h3>Projects</h3> */}
{/*       <p className="separator" /> */}
{/*       </div> */}
{/*       </article> */}
{/*       <PortfolioCards className="portfolio_cards"> */}
{/*       {allposts.map(({ node: { frontmatter: { heroimages, path, title = [] } } }) => { */}
{/*         return ( */}
{/*           <PortfolioCard className="portfolio_card" key={path}> */}
{/*           <Link to={path}> */}
{/*           {heroimages != null && heroimages.map((heroimage, i) => { */}
{/*             return ( */}
{/*               <PortImage key={path}> */}
{/*               <ImgWithOrient */}
{/*               key={path} */}
{/*               aspectRatio={heroimage.childImageSharp.fluid.aspectRatio} */}
{/*               alt={heroimage.name} */}
{/*               fluid={heroimage.childImageSharp.fluid} */}
{/*               /> */}
{/*               </PortImage> */}
{/*               ); */}
{/*           })} */}
{/*           <h1>{title}</h1> */}
{/*           </Link> */}
{/*           </PortfolioCard> */}
{/*           ); */}
{/*       })} */}
{/*       </PortfolioCards> */}
{/*       </div> */}
{/*       </section> */}
{/*       <section id="contact"> */}
{/*       <div className="container"> */}
{/*       <div className="heading-wrapper"> */}
{/*       <div className="heading"> */}
{/*       <p className="title"> */}
{/*       Want to <br /> */}
{/*       contact me? */}
{/*       </p> */}
{/*       <p className="separator" /> */}
{/*       </div> */}
{/*       </div> */}
{/*       <form id="contact-form" name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true"> */}
{/*       <input type="hidden" name="bot-field" /> */}
{/*       <input placeholder="Name" name="name" type="text" required /> */}
{/*       <input placeholder="Email" name="email" type="email" required /> */}
{/*       <textarea placeholder="Message" type="text" name="message" /> */}
{/*       <input className="button" id="submit" value="Submit" type="submit" /> */}
{/*       </form> */}
{/*       </div> */}
{/*       </section> */}
      </Welcome>
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
