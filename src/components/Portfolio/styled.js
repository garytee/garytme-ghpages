import styled from 'styled-components';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import { PRIMARY_COLOR } from '~/components/Common/constants';
export const Wrapper = styled(SimpleWrapper)`
padding: 100px 20px;
max-width: 1200px;
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
  padding: 0 0 0 20px;
  list-style: disc;
  line-height: 20px;
}
a {
  text-decoration: underline;
}
width: 100%;
@media (min-width: 414px) {
  width: 50%;
}
.aws-btn {
  --button-default-height: 51px;
  --button-default-font-size: 14px;
  --button-default-border-radius: 2px;
  --button-horizontal-padding: 20px;
  --button-raise-level: 4px;
  --button-hover-pressure: 1;
  --transform-speed: 0.175s;
  --button-primary-color: #3b9cff;
  --button-primary-color-dark: #1360a4;
  --button-primary-color-light: #ffffff;
  --button-primary-color-hover: #187bd1;
  --button-primary-border: none;
  --button-secondary-color: #f2f6f9;
  --button-secondary-color-dark: #1360a4;
  --button-secondary-color-light: #1e88e5;
  --button-secondary-color-hover: #e1eaf1;
  --button-secondary-border: 2px solid #1e88e5;
  --button-anchor-color: #0e4f88;
  --button-anchor-color-dark: #072743;
  --button-anchor-color-light: #ffffff;
  --button-anchor-color-hover: #0d4a7f;
  --button-anchor-border: none;
}
`;
export const ButtonWrap = styled.span`
.aws-btn__content span{
  display: flex !important;
  flex-wrap: wrap;
  align-items: center;
}
svg{
  margin-left: 5px;
}
`;
export const PortfolioImages = styled.section`
width: 50%;
@media (max-width: 414px) {
  float: none;
  padding: 0;
  width: 100%;
  height: auto;
  overflow-y: visible;
}
.imgwrap{
  display: block;
  text-align: center;
  margin: 0 auto;
  max-width: 540px;
  margin-top: 20px;
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
