import styled from 'styled-components';

const SimpleWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1920px;

  //dark mode

min-height: 100vh;

  //dark mode

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

export default SimpleWrapper;
