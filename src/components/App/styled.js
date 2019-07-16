import styled from 'styled-components';


export const Wrapper = styled.div`
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};


.portfolio_cards li{
width: 100%;

  @media (min-width: 414px) {
      width: calc(1/2*100% - (1 - 1/2)*20px);
  }

    @media (min-width: 768px) {
      width: calc(1/3*100% - (1 - 1/3)*30px);
  }

  img{
    display: block;
    max-width: 100%;
  }
}




main{
   min-height: 100vh; /* will cover the 100% of viewport */
 overflow: hidden;
 display: block;
 position: relative;
}

footer{
  display: none;
}
  @media print {
    & > nav,
    & > footer {
      display: none;
    }

    & > main {
      & > section {
        padding: 0;
      }
    }

    button {
      display: none;
    }
  }
`;
