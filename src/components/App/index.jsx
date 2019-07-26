import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Gnb from '~/components/Gnb';
import Footer from '~/components/Footer';
import { BLACK_COLOR, WHITE_COLOR } from '~/components/Common/constants';
import { Wrapper } from './styled';

export default class App extends Component {


    componentDidMount() {
    window.addEventListener("scroll", this.toggleBodyClass);
    this.toggleBodyClass();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleBodyClass);
  }

  toggleBodyClass = () => {
    if (window.scrollY > 100) {
      // document.body.classList.add("showChildDiv");
      document.getElementById("navigation").classList.add("scrolled");
    } else {
      // document.body.classList.remove("showChildDiv");
      document.getElementById("navigation").classList.remove("scrolled");
    }
  };

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
    categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    postInformations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    hasPortfolio: PropTypes.bool.isRequired,
  }

  state = {
    isDracula: global.localStorage && global.localStorage.getItem('theme') === 'dracula',
  }

  toggleTheme = () => {
    const { isDracula } = this.state;

    if (isDracula) {
      if (global.localStorage) {
        global.localStorage.setItem('theme', 'normal');
      }
    } else {
      if (global.localStorage) {
        global.localStorage.setItem('theme', 'dracula');
      }
    }

    this.setState({
      isDracula: !isDracula,
    });
  };

  render() {
    const {
      location,
      categories,
      postInformations,
      hasPortfolio,
      children,
    } = this.props;
    const { isDracula } = this.state;
    const theme = isDracula ? {
      color: BLACK_COLOR,
      backgroundColor: WHITE_COLOR,
    } : {
      color: WHITE_COLOR,
      backgroundColor: BLACK_COLOR,
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
              toggleTheme={this.toggleTheme}
              isDracula={isDracula}
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
