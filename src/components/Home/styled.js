import styled from 'styled-components';

export const Title = styled.h1`
  // @import url("https://fonts.googleapis.com/css?family=Kaushan+Script");
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 1.5em;
  line-height: 1.5em;
  font-size: 48px;
  font-size: 10vw;
  font-family: 'Kaushan Script';
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;




export const Intro = styled.section`
  text-align: center;
  font-size: 16px;
  // @import url("https://fonts.googleapis.com/css?family=Lato");

  h1 {
  // @import url("https://fonts.googleapis.com/css?family=Kaushan+Script");
  font-size: 32px;
  margin: 20px;
  // font-family: lato;
  // font-family: 'Kaushan Script', cursive;
  }
h2{
  font-size: 20px;
  margin: 20px;
}
  p {
    margin: .67em 0;
      // font-family: lato;

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
