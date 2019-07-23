import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PREFIX } from '~/constants';
import { Wrapper, PortfolioDescription, PortfolioImages } from './styled';
import Img from 'gatsby-image'

const Portfolio = ({ data: { portfolio: { frontmatter: { title, images, attachments }, html } } }) => (
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
{/*       {portimages.map((portimage) => { */}
{/*         if (portimage.includes('//')) { */}
{/*           return ( */}
{/*             <img */}
{/*               key={portimage} */}
{/*               src={portimage} */}
{/*               alt={title} */}
{/*             /> */}
{/*           ); */}
{/*         } */}
{/*  */}
{/*         const url = require(`~/resources/${portimage}`); */}
{/*  */}
{/*         return ( */}
{/*           <img */}
{/*             key={portimage} */}
{/*             src={url} */}
{/*             alt={title} */}
{/*           /> */}
{/*         ); */}
{/*       })} */}


{/*             {node.frontmatter.image != null && */}
{/*             <Img sizes={node.frontmatter.image.childImageSharp.sizes} /> */}
{/*             } */}


{/* {!!test && !!test.childImageSharp */}
{/*           ? <Img fluid={test.childImageSharp.fluid} */}
{/*                  alt={title} */}
{/*             /> */}
{/*           : <img src={test.publicURL} */}
{/*                  alt={title}  */}
{/*            /> */}
{/*         } */}


{/*                   {test != null && */}
{/*  */}
{/*  <Img fixed={test.childImageSharp.fixed} alt={title} /> */}
{/* } */}



{/*       {portimages.map((portimage) => { */}
{/*         if (portimage.includes('//')) { */}
{/*           return ( */}
{/*             <img */}
{/*               key={portimage} */}
{/*               src={portimage} */}
{/*               alt={title} */}
{/*             /> */}
{/*           ); */}
{/*         } */}
{/*  */}
{/*         const url = require(`~/resources/${portimage}`); */}
{/*  */}
{/*         return ( */}
{/*           <img */}
{/*             key={portimage} */}
{/*             src={url} */}
{/*             alt={title} */}
{/*           /> */}
{/*         ); */}
{/*       })} */}


      {attachments != null && attachments.map((attachment) => {
{/*         if (attachment.includes('//')) { */}
{/*           return ( */}
{/*             <img */}
{/*               key={attachment} */}
{/*               src={attachment} */}
{/*               alt={title} */}
{/*             /> */}
{/*           ); */}
{/*         } */}
{/*  */}
{/*         const url = require(`~/resources/${attachment}`); */}

        return (
          <Img
            key={attachment}
            fixed={attachment.childImageSharp.fixed}
            alt={title}
          />
        );
      })}






{/*                   {phoneimg != null && */}
{/*  */}
{/*  <Img fixed={phoneimg.childImageSharp.fixed} alt={title} /> */}
{/* } */}

{/*                   {test != null && */}
{/*  */}
{/*  <Img fixed={test.childImageSharp.fixed} alt={title} /> */}
{/* } */}



    </PortfolioImages>
  </Wrapper>
);

Portfolio.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default Portfolio;
