import styled from 'styled-components';

const PortfolioCard = styled.li`

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
`;

export default PortfolioCard;
