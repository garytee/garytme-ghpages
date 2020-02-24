import styled from 'styled-components';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
export const Wrapper = styled(SimpleWrapper)`
.portfolio_cards{
  display: flex;
  flex-wrap: wrap;
  padding-top: 80px;
  justify-content: space-between;
}
ul li{
  list-style: none;
}
.portfolio_cards li{
  width: 100%;
  @media (min-width: 414px) {
    width: 100%;
  }
  @media (min-width: 768px) {
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

export const PortfolioCards = styled.ul`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
// margin-top: 40px;
`;
export const PortfolioCard = styled.li`
@media (min-width: 414px) {
  width: calc(1/3*100% - (1 - 1/3)*60px);
  margin: 100px 0px;
}
width: calc(1/2*100% - (1 - 1/2)*60px);
margin: 100px 0px;
`;

export const PortImage = styled.div`
max-width: 200px;
margin: 0 auto;
`;
