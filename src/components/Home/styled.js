import styled from 'styled-components';
import SimpleWrapper from '~/components/Common/SimpleWrapper';

export const Wrapper = styled(SimpleWrapper)`

`;


export const Intro = styled.section`
text-align: center;
font-size: 16px;
position: absolute;
top: 50%;
transform: translateY(-50%);
left: 0;
right: 0;
}
h1 {
  font-size: 32px;
  margin: 20px;
}
h2{
  font-size: 20px;
  margin: 20px;
}
p {
  margin: .67em 0;
}
img {
  border-radius: 50%;
}
.contactlinks{
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 400px;
  list-style-type: none;
  margin-top: 40px;
  font-size: 20px;
  margin-left: 40px;
  margin-right: 40px;
  @media (min-width: 414px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 400px;
    list-style-type: none;
    margin-top: 40px;
    font-size: 30px;
  }
}
.selfie{
  max-width: 125px;
  margin: 0 auto;
}
`;

