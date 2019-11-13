import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Gnb from '~/components/Gnb';
import Footer from '~/components/Footer';
import { BLACK_COLOR, WHITE_COLOR } from '~/components/Common/constants';
import { Wrapper } from './styled';
import { Link } from "gatsby";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


const defaultState = {
  dark: false,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true


export default class App extends Component {


  //   componentDidMount() {
  //   window.addEventListener("scroll", this.toggleBodyClass);
  //   this.toggleBodyClass();
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.toggleBodyClass);
  // }

  // toggleBodyClass = () => {
  //   if (window.scrollY > 100) {
  //     // document.body.classList.add("showChildDiv");
  //     document.getElementById("navigation").classList.add("scrolled");
  //   } else {
  //     // document.body.classList.remove("showChildDiv");
  //     document.getElementById("navigation").classList.remove("scrolled");
  //   }
  // };

  render() {
    return (
      <div
        style={{
          height: "1000px"
        }}
      />
    );
  }


  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
    // categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    // postInformations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    // hasPortfolio: PropTypes.bool.isRequired,
  }

  // state = {
  //   isDracula: global.localStorage && global.localStorage.getItem('theme') === 'dracula',
  // }

  // toggleTheme = () => {
  //   const { isDracula } = this.state;

  //   if (isDracula) {
  //     if (global.localStorage) {
  //       global.localStorage.setItem('theme', 'normal');
  //     }
  //   } else {
  //     if (global.localStorage) {
  //       global.localStorage.setItem('theme', 'dracula');
  //     }
  //   }

  //   this.setState({
  //     isDracula: !isDracula,
  //   });
  // };


state = {
    dark: false,
  }

  toggleDark = () => {
    let dark = !this.state.dark
    localStorage.setItem('dark', JSON.stringify(dark))
    this.setState({ dark })
  }

  componentDidMount() {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem('dark'))
    if (lsDark) {
      this.setState({ dark: lsDark })
    } else if (supportsDarkMode()) {
      this.setState({ dark: true })
    }
  }

  render() {
    const {
      location,
      categories,
      postInformations,
      hasPortfolio,
      children,
    } = this.props;
    const { dark } = this.state;
    const theme = dark ? {
      color: WHITE_COLOR,
      backgroundColor: BLACK_COLOR,
    } : {
      color: BLACK_COLOR,
      backgroundColor: WHITE_COLOR,
    };

    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <nav>
            <Gnb
              location={location}
              categories={categories}
              postInformations={postInformations}
              hasPortfolio={hasPortfolio}
              toggleDark={this.toggleDark}
              dark={dark}
            />
          </nav>

{/*     <header style={{ marginBottom: `1.5rem` }}> */}
{/*       <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}> */}
{/*         <h3 style={{ display: `inline` }}>MySweetSite</h3> */}
{/*         <img src="/logo/favicon.png" /> */}
{/*       </Link> */}
{/*       <ul style={{ listStyle: `none`, float: `right` }}> */}
{/*         <ListLink to="/">Home</ListLink> */}
{/*         <ListLink to="/portfolio/">portfolio</ListLink> */}
{/*         <ListLink to="/resume/">resume</ListLink> */}
{/*       </ul> */}
{/*     </header> */}


          <main>
            {children}
          </main>
{/*           <footer> */}
{/*             <Footer /> */}
{/*           </footer> */}
        </Wrapper>
      </ThemeProvider>
    );
  }
}
