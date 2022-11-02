import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import Gnb from '~/components/Gnb';
import Footer from '~/components/Footer';
import { BLACK_COLOR, WHITE_COLOR, homeherolight, homeherodark, homeabout, lightblue, darkblue } from '~/components/Common/constants';
import { Wrapper } from './styled';

const ListLink = (props) => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);
const defaultState = {
  dark: false,
  toggleDark: () => {},
};
const ThemeContext = React.createContext(defaultState);
// Getting dark mode information from OS!
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;
export default class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '1000px',
        }}
      />
    );
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    postInformations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    hasPortfolio: PropTypes.bool.isRequired,
  }

state = {
  dark: false,
}

  toggleDark = () => {
    const dark = !this.state.dark;
    localStorage.setItem('dark', JSON.stringify(dark));
    this.setState({ dark });
  }

  componentDidMount() {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem('dark'));
    if (lsDark) {
      this.setState({ dark: lsDark });
    } else if (supportsDarkMode()) {
      this.setState({ dark: true });
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
      bluecolor: lightblue,
      color: WHITE_COLOR,
      backgroundColor: BLACK_COLOR,
      homeherobackground: homeherodark,
      homeabout,
    } : {
      bluecolor: darkblue,
      color: BLACK_COLOR,
      backgroundColor: WHITE_COLOR,
      homeherobackground: homeherolight,
      homeabout: WHITE_COLOR,
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
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </Wrapper>
      </ThemeProvider>
    );
  }
}
