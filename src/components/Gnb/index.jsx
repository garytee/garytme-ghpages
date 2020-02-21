import React, { useReducer, useCallback, useEffect } from 'react';
import useDarkMode from "use-dark-mode";
// import Sunrise from "~/components/icons/sunrise"
// import Sunset from "~/components/icons/sunset"
import PropTypes from 'prop-types';
import { Link, navigate, StaticQuery, graphql } from 'gatsby';
import Toggle from 'react-toggle';
import { FaCaretDown, FaSearch, FaTags } from 'react-icons/fa';
import {
  Hamburger,
  MovableFaCaretDown,
  GnbWrapper,
  List,
  SubMenu,
  ListMenu,
  Home,
  StyledLink,
  SearchBarWrapper,
  SearchBar,
  SearchedPosts,
  Title,
  Summary,
  Tag,
  SearchedPost,
  Background,
  MobileMenus,
  MobileMenu,
  ToggleWrapper,
} from './styled';
import Img from 'gatsby-image'
const reactStringReplace = require('react-string-replace');
const TOGGLE_MENU = 'TOGGLE_MENU';
const TOGGLE_SUB_MENU = 'TOGGLE_SUB_MENU';
const INPUT_KEYWORD = 'INPUT_KEYWORD';
const initialState = {
  isMenuOpened: false,
  isSubMenuClosed: false,
  searchKeyword: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      const isMenuOpened = !state.isMenuOpened;
      return {
        ...state,
        isMenuOpened,
      };
    }
    case TOGGLE_SUB_MENU: {
      const isSubMenuClosed = !state.isSubMenuClosed;
      return {
        ...state,
        isSubMenuClosed,
      };
    }
    case INPUT_KEYWORD: {
      const { searchKeyword } = action;
      return {
        ...state,
        searchKeyword,
      };
    }
    default:
    return state;
  }
};
const Gnb = ({
  location,
  toggleDark,
  dark,
  categories,
  postInformations,
  hasPortfolio,
}) => {
  const [{ isMenuOpened, isSubMenuClosed, searchKeyword }, dispatch] = useReducer(reducer, initialState);
  const toggleMenu = useCallback(() => {
    dispatch({ type: TOGGLE_MENU });
  }, []);
  const toggleSubMenu = useCallback(() => {
    dispatch({ type: TOGGLE_SUB_MENU });
  }, []);
  const navigateToPath = useCallback((path) => {
    navigate(path);
  }, []);
  const inputKeyword = useCallback((e) => {
    const searchKeyword = e.target.value;
    dispatch({ type: INPUT_KEYWORD, searchKeyword });
  });
  useEffect(() => {
    if (isMenuOpened) {
      global.document.body.style.overflow = 'hidden';
    } else {
      global.document.body.style.overflow = 'visible';
    }
  }, [isMenuOpened]);
  const filteredPosts = searchKeyword.length > 0
  ? (
    postInformations
    .filter(({ category = '', title = '', tags = [] }) => {
      const c = category.toLowerCase();
      const h = title.toLowerCase();
      const t = tags.map(tag => tag.toLowerCase());
      const searchedWithCategory = c.search(searchKeyword) !== -1;
      const searchedWithTitle = h.search(searchKeyword) !== -1;
      const searchedWithTags = t.filter(t => t.search(searchKeyword) !== -1).length > 0;
      return searchedWithCategory || searchedWithTitle || searchedWithTags;
    }))
  : [];
  const { pathname } = location;
  const isPortfolio = pathname.replace(/\/$/, '').startsWith('/portfolio');
  const isHome = pathname.replace(/\/$/, '') === '';
  const isResume = pathname.replace(/\/$/, '') === '/resume';
  const isPost = !(isPortfolio || isHome || isResume);



    // Instantiate with the default behavior, in this case, it defaults to light-mode
 // This places "light-mode" class on document.body, as outlined in my gatsby-config.js
  const darkMode = useDarkMode(false);

  // Custom function that handles the toggling
  // When called, it replaces the class on document.body and holds it in localStorage
  const handleTheme = theme => theme === "dark" ? darkMode.enable() : darkMode.disable();

  return (
    <StaticQuery
    query={graphql`
      query gnbQuery {
        file(relativePath: { eq: "favicon.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width:40) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
      `}
      render={data => (
        <GnbWrapper id="navigation">
        <MobileMenu isActive={isMenuOpened} isSubActive={isSubMenuClosed}>
        <Background onClick={toggleMenu} isActive={isMenuOpened} />
        <MobileMenus>
        <ul>
        <ListMenu>
{/*         <StyledLink to="/"> */}
              <StyledLink to="/" className={isHome ? 'active' : ''} onClick={toggleMenu}>

        <Img critical={true} fixed={data.file.childImageSharp.fixed} />
        </StyledLink>
        </ListMenu>
{/*         <ListMenu> */}
{/*         <StyledLink to="/posts/1" className={isPost ? 'active' : ''} onClick={toggleMenu}> */}
{/*         Posts */}
{/*         </StyledLink> */}
{/*         {categories.length > 0 */}
{/*           ? ( */}
{/*             <> */}
{/*             &nbsp; */}
{/*             <MovableFaCaretDown */}
{/*             className={isSubMenuClosed ? 'is-active' : ''} */}
{/*             onClick={toggleSubMenu} */}
{/*             /> */}
{/*             </> */}
{/*             ) */}
{/*             : null} */}
{/*             <SubMenu> */}
{/*             <div> */}
{/*             {categories.map(({ key, length }) => { */}
{/*               if (key === '__ALL__') { */}
{/*                 return null; */}
{/*               } */}
{/*               return ( */}
{/*                 <li key={key}> */}
{/*                 <Link to={`/categories/${key}/1`}> */}
{/*                 {reactStringReplace(key, /-(\w+)/g, (match, i) => ( */}
{/*                   <span key={i}>&nbsp;{match}</span> */}
{/*                   ))} */}
{/*                 </Link> */}
{/*                 </li> */}
{/*                 ); */}
{/*             })} */}
{/*             </div> */}
{/*             </SubMenu> */}
{/*             </ListMenu> */}
            {hasPortfolio ? (
              <ListMenu>
              <StyledLink to="/portfolio" className={isPortfolio ? 'active' : ''} onClick={toggleMenu}>
              Portfolio
              </StyledLink>
              </ListMenu>
              ) : null}
            <ListMenu>
            <StyledLink to="/resume" className={isResume ? 'active' : ''} onClick={toggleMenu}>
            Resume
            </StyledLink>
            </ListMenu>
            </ul>
            </MobileMenus>
            </MobileMenu>
            <Hamburger
            className={`hamburger hamburger--spin js-hamburger ${isMenuOpened ? 'is-active' : ''}`}
            onClick={toggleMenu}
            >
            <div className="hamburger-box">
            <div className="hamburger-inner" />
            </div>
            </Hamburger>
            <List>
            <ListMenu>
            <StyledLink to="/">
            <Img critical={true} fixed={data.file.childImageSharp.fixed} />
            </StyledLink>
            </ListMenu>
{/*             <ListMenu> */}
{/*             <StyledLink to="/posts/1" className={isPost ? 'active' : ''}> */}
{/*             Posts */}
{/*             &nbsp; */}
{/*             {categories.length > 0 ? <FaCaretDown /> : null} */}
{/*             </StyledLink> */}
{/*             <SubMenu> */}
{/*             <div> */}
{/*             {categories.map(({ key, length }) => { */}
{/*               if (key === '__ALL__') { */}
{/*                 return null; */}
{/*               } */}
{/*               return ( */}
{/*                 <li key={key}> */}
{/*                 <Link to={`/categories/${key}/1`}> */}
{/*                 {reactStringReplace(key, /-(\w+)/g, (match, i) => ( */}
{/*                   <span key={i}>&nbsp;{match}</span> */}
{/*                   ))} */}
{/*                 </Link> */}
{/*                 </li> */}
{/*                 ); */}
{/*             })} */}
{/*             </div> */}
{/*             </SubMenu> */}
{/*             </ListMenu> */}
            {hasPortfolio ? (
              <ListMenu>
              <StyledLink to="/portfolio" className={isPortfolio ? 'active' : ''}>
              Portfolio
              </StyledLink>
              </ListMenu>
              ) : null}
            <ListMenu>
            <StyledLink to="/resume" className={isResume ? 'active' : ''}>
            Resume
            </StyledLink>
            </ListMenu>
            </List>
{/*             <StyledLink to="/"> */}
{/*         <Img fixed={data.file.childImageSharp.fixed} /> */}
{/*         </StyledLink> */}
            <ToggleWrapper>
{/*             <Toggle */}
{/*             defaultChecked={isDracula} */}
{/*             icons={{ */}
{/*               checked: <span role="img" aria-label="change-theme">🌙</span>, */}
{/*               unchecked: <span role="img" aria-label="change-theme">☀️</span>, */}
{/*             }} */}
{/*             onChange={toggleTheme} */}
{/*             /> */}


{/*       <button type="button" onClick={darkMode.disable}> */}
{/*         ☀ */}
{/*       </button> */}
      <Toggle 
                  icons={{
              checked: <span role="img" aria-label="change-theme">🌙</span>,
              unchecked: <span role="img" aria-label="change-theme">☀️</span>,
            }}
      checked={darkMode.value} onChange={darkMode.toggle} onClick={toggleDark}/>
{/*       <button type="button" onClick={darkMode.enable}> */}
{/*         ☾ */}
{/*       </button> */}

{/*     <div className="toggle"> */}
{/*       <Sunrise onClick={handleTheme} /> / */}
{/*       <Sunset onClick={handleTheme} /> */}
{/*     </div> */}
            </ToggleWrapper>

{/*                 <div className="hero"> */}
{/*       <Sunrise onClick={handleTheme} /> */}
{/*       <Sunset onClick={handleTheme} /> */}
{/*     </div> */}


            </GnbWrapper>
            )}
            />
            );
        };
        Gnb.propTypes = {
          location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
          toggleDark: PropTypes.func.isRequired,
          dark: PropTypes.bool.isRequired,
          categories: PropTypes.arrayOf(PropTypes.shape({})),
          postInformations: PropTypes.arrayOf(PropTypes.shape({})),
          hasPortfolio: PropTypes.bool.isRequired,
        };
        Gnb.defaultProps = {
          categories: [],
          postInformations: [],
        };
        export default Gnb;
        const useSiteMetadata = () => {
          const { site } = useStaticQuery(
            graphql`
            query {
              site {
                siteMetadata {
                  title
                }
              }
            }
            `
            )
          return site.siteMetadata
        }