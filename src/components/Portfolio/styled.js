import styled from 'styled-components';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import { PRIMARY_COLOR } from '~/components/Common/constants';

export const Wrapper = styled(SimpleWrapper)`
  padding: 100px 20px;

  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }

  display: flex;
  flex-wrap: wrap;
`;

export const PortfolioDescription = styled.section`
//   float: left;
//   padding: 0 0 0 36px;
//   width: 50%;

//   @media (max-width: 414px) {
//     float: none;
//     margin: 0 0 16px;
//     padding: 0 0 16px;
//     width: 100%;
//   }

// //   h1:after, h2:after {
// //     content: "";
// //     display: block;
// //     position: relative;
// //     top: .33em;
// //     border-bottom: 1px solid hsla(0,0%,50%,.33);
// //     margin: 20px;
// // }

  h1 {
    margin: 0.67em 0;
    font-size: 40px;
  }

  h2 {
    margin: 0.67em 0;
    font-size: 20px;
  }

  ul {
    margin: 10px 0;
    padding: 0 0 0 40px;
    list-style: disc;
  }

  a {
    text-decoration: underline;
  }


width: 50%;

`;

export const PortfolioImages = styled.section`
  // float: left;
  // padding: 0 36px 0 0;
  width: 50%;
  max-height: calc(100vh - 100px);
  overflow-y: scroll;
  text-align: center;

  @media (max-width: 414px) {
    float: none;
    padding: 0;
    width: 100%;
    height: auto;
    overflow-y: visible;
  }

  img {
   /*  padding: 16px;
    width: 100%;
    height: auto; */
    padding: 16px;
    max-width: 100%;
    display: block;
    margin: 0 auto;

    @media (max-width: 414px) {
      float: left;
      margin: 0 0 8px;
      padding: 0;
      &:last-child {
        margin: 0 0 16px;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${PRIMARY_COLOR};
    border-radius: 6px;
  }
`;
