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
  	margin-top: 80px;
  	justify-content: space-between;
  }

  ul li{
    list-style: none;
  }
`;
