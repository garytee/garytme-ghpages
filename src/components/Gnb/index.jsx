import React, { useReducer, useCallback, useEffect } from 'react';
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
// import * as profileUrl from '~/resources/favicon.png';
import Img from 'gatsby-image'


const reactStringReplace = require('react-string-replace');
    // const content = 'Raspberry-Pi';


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
  toggleTheme,
  isDracula,
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

  return (
    <GnbWrapper id="navigation">
      <MobileMenu isActive={isMenuOpened} isSubActive={isSubMenuClosed}>
        <Background onClick={toggleMenu} isActive={isMenuOpened} />
        <MobileMenus>
          <ul>
                 <ListMenu>
        <StyledLink to="/">
{/*         <img */}
{/*             src={profileUrl.default} */}
{/*             alt="" */}
{/*             width="50" */}
{/*             height="50" */}
{/*           /> */}


    <StaticQuery
    query={graphql`
      query mobilegnbQuery {
            file(relativePath: { eq: "favicon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width:50) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
      }
    `}
    render={data => (


    <Img fixed={data.file.childImageSharp.fixed} />


    )}
  />


          </StyledLink>
                  </ListMenu>

{/*             <ListMenu> */}
{/*               <StyledLink to="/" onClick={toggleMenu}> */}
{/*                 <Home /> */}
{/*               </StyledLink> */}
{/*             </ListMenu> */}
{/*             <ListMenu> */}
{/*               <StyledLink to="/posts/1" className={isPost ? 'active' : ''} onClick={toggleMenu}> */}
{/*                 Posts */}
{/*               </StyledLink> */}
{/*               {categories.length > 0 */}
{/*                 ? ( */}
{/*                   <> */}
{/*                     &nbsp; */}
{/*                     <MovableFaCaretDown */}
{/*                       className={isSubMenuClosed ? 'is-active' : ''} */}
{/*                       onClick={toggleSubMenu} */}
{/*                     /> */}
{/*                   </> */}
{/*                 ) */}
{/*                 : null} */}
{/*               <SubMenu> */}
{/*                 <div> */}
{/*                   {categories.map(({ key, length }) => { */}
{/*                     if (key === '__ALL__') { */}
{/*                       return null; */}
{/*                     } */}
{/*  */}
{/*                     return ( */}
{/*                       <li key={key}> */}
{/*                         <Link to={`/categories/${key}/1`} onClick={toggleMenu}> */}
{/*                           {key} */}
{/*                           &nbsp; */}
{/*                           <small> */}
{/*                             {`(${length})`} */}
{/*                           </small> */}
{/*                         </Link> */}
{/*                       </li> */}
{/*                     ); */}
{/*                   })} */}
{/*                 </div> */}
{/*               </SubMenu> */}
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
{/*             <SearchBarWrapper> */}
{/*               <label htmlFor="search"> */}
{/*                 <FaSearch /> */}
{/*               </label> */}
{/*               <SearchBar */}
{/*                 id="search" */}
{/*                 type="text" */}
{/*                 value={searchKeyword} */}
{/*                 onChange={inputKeyword} */}
{/*               /> */}
{/*             </SearchBarWrapper> */}
{/*             <SearchedPosts isEmpty={filteredPosts.length === 0}> */}
{/*               {filteredPosts.map(({ path, title, summary, tags }) => ( */}
{/*                 <SearchedPost key={path}> */}
{/*                   <Title onClick={() => { navigateToPath(path); }}> */}
{/*                     {title} */}
{/*                   </Title> */}
{/*                   <Summary onClick={() => { navigateToPath(path); }}> */}
{/*                     {summary} */}
{/*                   </Summary> */}
{/*                   {tags.length > 0 ? ( */}
{/*                     <FaTags /> */}
{/*                   ) : null} */}
{/*                   {[...new Set(tags)].map(tag => ( */}
{/*                     <Tag key={tag} onClick={() => { navigateToPath(`/tags/${tag}/1`); }}> */}
{/*                       <small> */}
{/*                         {tag} */}
{/*                       </small> */}
{/*                     </Tag> */}
{/*                   ))} */}
{/*                 </SearchedPost> */}
{/*               ))} */}
{/*             </SearchedPosts> */}
          </ul>
        </MobileMenus>
      </MobileMenu>
      <ToggleWrapper>
        <Toggle
          defaultChecked={isDracula}
          icons={{
            checked: <span role="img" aria-label="change-theme">🌙</span>,
            unchecked: <span role="img" aria-label="change-theme">☀️</span>,
          }}
          onChange={toggleTheme}
        />
      </ToggleWrapper>
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
{/*         <img */}
{/*             src={profileUrl.default} */}
{/*             alt="" */}
{/*             width="50" */}
{/*             height="50" */}
{/*           /> */}


    <StaticQuery
    query={graphql`
      query gnbQuery {
            file(relativePath: { eq: "favicon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width:50) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
      }
    `}
    render={data => (


    <Img fixed={data.file.childImageSharp.fixed} />


    )}
  />
          </StyledLink>
                  </ListMenu>
{/*         <ListMenu> */}
{/*           <StyledLink to="/"> */}
{/*             <Home /> */}
{/*           </StyledLink> */}
{/*         </ListMenu> */}
{/*         <ListMenu> */}
{/*           <StyledLink to="/posts/1" className={isPost ? 'active' : ''}> */}
{/*             Posts */}
{/*             &nbsp; */}
{/*             {categories.length > 0 ? <FaCaretDown /> : null} */}
{/*           </StyledLink> */}
{/*           <SubMenu> */}
{/*             <div> */}
{/*               {categories.map(({ key, length }) => { */}
{/*                 if (key === '__ALL__') { */}
{/*                   return null; */}
{/*                 } */}
{/*  */}
{/*                 return ( */}
{/*                   <li key={key}> */}
{/*                     <Link to={`/categories/${key}/1`}> */}
{/*                       {key} */}
{/*                       &nbsp; */}
{/*                       <small> */}
{/*                         {`(${length})`} */}
{/*                       </small> */}
{/*                     </Link> */}
{/*                   </li> */}
{/*                 ); */}
{/*  */}
{/*     return ( */}
{/*       <li key={key}> */}
{/*       <Link to={`/categories/${key}/1`}> */}
{/*         {reactStringReplace(key, /-(\w+)/g, (match, i) => ( */}
{/*           <span key={i}>&nbsp;{match}</span> */}
{/*         ))} */}
{/*         </Link> */}
{/*       </li> */}
{/*     ); */}
{/*  */}
{/*               })} */}
{/*             </div> */}
{/*           </SubMenu> */}
{/*         </ListMenu> */}
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
{/*       <SearchBarWrapper> */}
{/*         <label htmlFor="search"> */}
{/*           <FaSearch /> */}
{/*         </label> */}
{/*         <SearchBar */}
{/*           id="search" */}
{/*           type="text" */}
{/*           value={searchKeyword} */}
{/*           onChange={inputKeyword} */}
{/*         /> */}
{/*       </SearchBarWrapper> */}
{/*       <SearchedPosts isEmpty={filteredPosts.length === 0}> */}
{/*         {filteredPosts.map(({ path, title, summary, tags }) => ( */}
{/*           <SearchedPost key={path}> */}
{/*             <Title onClick={() => { navigateToPath(path); }}> */}
{/*               {title} */}
{/*             </Title> */}
{/*             <Summary onClick={() => { navigateToPath(path); }}> */}
{/*               {summary} */}
{/*             </Summary> */}
{/*             {tags.length > 0 ? ( */}
{/*               <FaTags /> */}
{/*             ) : null} */}
{/*             {[...new Set(tags)].map(tag => ( */}
{/*               <Tag key={tag} onClick={() => { navigateToPath(`/tags/${tag}/1`); }}> */}
{/*                 <small> */}
{/*                   {tag} */}
{/*                 </small> */}
{/*               </Tag> */}
{/*             ))} */}
{/*           </SearchedPost> */}
{/*         ))} */}
{/*       </SearchedPosts> */}
    </GnbWrapper>
  );
};

Gnb.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
  toggleTheme: PropTypes.func.isRequired,
  isDracula: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  postInformations: PropTypes.arrayOf(PropTypes.shape({})),
  hasPortfolio: PropTypes.bool.isRequired,
};

Gnb.defaultProps = {
  categories: [],
  postInformations: [],
};

export default Gnb;


