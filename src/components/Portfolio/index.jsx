import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PREFIX } from '~/constants';
import { Wrapper, PortfolioDescription, PortfolioImages, ButtonWrap } from './styled';
import Img from 'gatsby-image';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import AwesomeButtonStyles from "react-awesome-button/dist/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Portfolio = ({ data: { portfolio: { frontmatter: { title, portfolioimages, websiteurl }, html } } }) => (
  <Wrapper>
  <Helmet>
  <title>
  {`${PREFIX}${title.toUpperCase()}`}
  </title>
  <meta name="og:title" content={`${PREFIX}${title.toUpperCase()}`} />
  </Helmet>
  <PortfolioDescription>
  <section dangerouslySetInnerHTML={{ __html: html }} />

{/*             {websiteurl != null && */}
{/*             */}
{/*         <a */}
{/*       href={websiteurl} */}
{/*       target="_blank" */}
{/*       rel="noreferrer noopener" */}
{/*     >Go to Web Site →</a> */}
{/*  */}
{/*  } */}

{/*     <AwesomeButton cssModule={AwesomeButtonStyles} type="primary"> */}
{/*       Button */}
{/*     </AwesomeButton> */}

{/* {websiteurl != null && */}
{/*     <AwesomeButton */}
{/*       cssModule={AwesomeButtonStyles} */}
{/*       size="large" */}
{/*       type="primary" */}
{/*       href={websiteurl} */}
{/*       target="_blank" */}
{/*     > */}
{/*       Visit Website */}
{/*     </AwesomeButton> */}
{/* } */}
<ButtonWrap>

{websiteurl != null &&
<AwesomeButton
 type="primary"
 size="large"
 href={websiteurl}
 target="_blank"
>Visit Website&nbsp;<FontAwesomeIcon icon={["fal", "arrow-right"]} style={{color:"#2464A7"}}/>
</AwesomeButton>
}


</ButtonWrap>

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
