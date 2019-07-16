import styled from 'styled-components';




const PortfolioCard = styled.li`
  // display: inline-block;
  // position: relative;
  // float: left;
  // padding: 15% 0 0;
  // width: 33.333333333%;
  // height: 0;
  // /* background-color: #fff; */
  // overflow: hidden;
  // @media (max-width: 414px) {
  //   padding: 56.25% 0 0;
  //   width: 100%;
  // }

  // &:nth-child(4n + 2),
  // &:nth-child(4n + 3) {
  // /* background-color: #fff; */
  // }

  // &:hover {
  //   img {
  //    /* width: 110%; */
  //         filter: none;
  //     -webkit-filter: grayscale(0);
  //   /*  -webkit-transform: scale(1.01); */
  //   }

  //   h4 {
  //     font-size: 2.2vw;
  //   }
  // }

  // a {
  //   display: block;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   color: #000;
  // }

  // img {
  //   position: absolute;
  //   top: 0;
  //   bottom: 0;
  //   right: 0;
  //   left: 0;
  //   margin: auto;
  //   width: 100%;
  //   height: auto;
  //   /* transition: all .4s ease 0s; */
  //     filter: gray; /* IE5+ */
  //     -webkit-filter: grayscale(1); /* Webkit Nightlies & Chrome Canary */
  //    /* -webkit-transition: all .8s ease-in-out;  */
  // }

  // h6 {
  //   position: absolute;
  //   bottom: 16px;
  //   left: 16px;
  //   font-size: 14px;
  //   text-decoration: underline;
  // }

  // h4 {
  //   position: absolute;
  //   top: 0;
  //   bottom: 0;
  //   right: 0;
  //   left: 0;
  //   margin: auto;
  //   width: 80%;
  //   height: 2em;
  //   line-height: 2em;
  //   font-size: 2vw;
  //   text-align: center;
  //   transition: all .4s ease 0s;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   white-space: nowrap;
  // }

  // width: 33.333333333%;

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
