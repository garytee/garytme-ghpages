import styled from 'styled-components';

const SimpleWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1920px;

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

export default SimpleWrapper;
