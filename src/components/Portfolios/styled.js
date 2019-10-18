import styled from 'styled-components';
import SimpleWrapper from '~/components/Common/SimpleWrapper';

export const Wrapper = styled(SimpleWrapper)`
  // padding: 100px 0 0;

  // @media (max-width: 414px) {
  //   padding: 70px 0 0;
  // }

  .portfolio_cards{
  	display: flex;
  	flex-wrap: wrap;
  	// margin-top: 80px;
    padding-top: 80px;
  	justify-content: space-between;
  }

  ul li{
    list-style: none;
  }


  .portfolio_cards li{
width: 100%;

  @media (min-width: 414px) {
      // width: calc(1/2*100% - (1 - 1/2)*20px);
      width: 100%;
  }

    @media (min-width: 768px) {
      // width: calc(1/3*100% - (1 - 1/3)*30px);
      width: calc(1/2*100% - (1 - 1/2)*20px);
  }

    @media (min-width: 1200px) {
      width: calc(1/3*100% - (1 - 1/3)*30px);
  }

  img{
    display: block;
    max-width: 100%;
  }
}




`;
