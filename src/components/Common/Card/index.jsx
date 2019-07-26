import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Truncate from 'react-truncate';
import { FaTags } from 'react-icons/fa';
import formattedDate from '~/utils/formattedDate';
import { ImageWrapper, TagWrapper, StyledArticle } from './styled';
import Img from 'gatsby-image'

const Card = ({
  tags,
  path,
  images,
  heroimages,
  title,
  date,
  summary,
}) => {
  const [image = null] = images;

  return (
    <StyledArticle>
      <div>
        <Link to={path}>
{/*           <ImageWrapper> */}
{/*             {image === null ? null : ( */}
{/*               <img */}
{/*                 src={image.includes('//') ? image : require(`~/resources/${image}`)} */}
{/*                 alt={title} */}
{/*               /> */}
{/*             )} */}
{/*           </ImageWrapper> */}


  {heroimages != null && heroimages.map((heroimage, i) => {
    return (
      <Img
      key={i}
      fluid={heroimage.childImageSharp.fluid}
      alt={title}
      />
      );
  })}


  
          <h3>
            <Truncate
              lines={2}
              ellipsis={(
                <span>
                  ...
                </span>
              )}
            >
              {title}
            </Truncate>
          </h3>
          <p>
            <Truncate
              lines={3}
              ellipsis={(
                <span>
                  ...
                </span>
              )}
            >
              {summary}
            </Truncate>
          </p>
        </Link>
{/*         <TagWrapper> */}
{/*           <FaTags /> */}
{/*           {tags.map(tag => ( */}
{/*             <Link */}
{/*               key={tag} */}
{/*               to={`/tags/${tag}/1`} */}
{/*             > */}
{/*               <small> */}
{/*                 {tag} */}
{/*               </small> */}
{/*             </Link> */}
{/*           ))} */}
{/*         </TagWrapper> */}
{/*         <time> */}
{/*           {formattedDate(date)} */}
{/*         </time> */}
      </div>
    </StyledArticle>
  );
};

Card.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  path: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  portimages: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  date: PropTypes.string,
  summary: PropTypes.string,
};

Card.defaultProps = {
  tags: [],
  images: [],
  portimages: [],
  title: '',
  date: '',
  summary: '',
};

export default Card;
