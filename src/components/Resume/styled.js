import styled from 'styled-components';
import Clearfix from '~/components/Common/Clearfix';
export const Wrapper = styled.section`
min-height: 100vh;
// position: relative;
// top: 100px;

padding-top: 140px;
color: ${({ theme: { color } }) => color};
background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
transition: all 0.6s ease;
.page--resume {
  color: black;
}
.page--resume__main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 70px 0;
}
@media screen and (max-width: 1240px) {
  .page--resume__main {
    padding: 70px;
    margin: 0;
  }
}
@media screen and (max-width: 450px) {
  .page--resume__main {
    padding: 70px 40px 20px 20px;
  }
}
.page--resume__main h1 {
  font-size: 96px;
  opacity: 0.4;
  font-weight: 700;
  color: rgba(255, 167, 129, 0.9);
}
.dark-mode .page--resume__main h1 {
  color: rgba(105, 138, 252, 0.9);
}
.page--resume__job {
  padding: 55px 0 25px 70px;
  position: relative;
  padding-bottom: 55px;
  // border-bottom: 1px solid rgba(151, 153, 164, 0.25);
}
@media screen and (max-width: 450px) {
  .page--resume__job {
    // margin: 40px 0;
    padding-bottom: 10px;
  }
}
.page--resume__job:nth-of-type(8),
.page--resume__job:nth-of-type(10) {
  border-bottom: 0;
}
@media screen and (max-width: 450px) {
  .page--resume__job {
    margin-left: 20px;
  }
}
.page--resume__job h2 {
  font-size: 19px;
  font-weight: 300;
  // color: black;
color: ${({ theme: { color } }) => color};
transition: all 0.6s ease;

}
.page--resume__job h2 strong {
  font-weight: 700;
}
// .page--resume__job h2 a,
// .page--resume__job h2 a:visited,
// .page--resume__job h2 a:active {
//   text-decoration: none;
//   color: black;
//   transition: all 0.1s ease-in-out;
// }
// .page--resume__job h2 a:hover {
//   color: #61AFEF;
// }
@media screen and (max-width: 450px) {
  .page--resume__job h2 {
    font-size: 17px;
  }
}
.page--resume__job.-is-current {
  margin-bottom: 55px;
  border-bottom: 0;
}
.page--resume__job.-is-current h2 {
  font-size: 28px;
}
@media screen and (max-width: 450px) {
  .page--resume__job.-is-current h2 {
    font-size: 20px;
  }
}
.page--resume__job.-is-current::before {
  content: 'Currently';
  white-space: nowrap;
  top: -34px;
  position: absolute;
  font-size: 94px;
  font-weight: 900;
  z-index: -1;
  // color: rgba(255, 167, 129, 0.2);
  // color: ${({ theme: { color } }) => color};

  color: ${({ theme: { bluecolor } }) => bluecolor};
}
.dark-mode .page--resume__job.-is-current::before {
  // color: rgba(105, 138, 252, 0.12);

}
@media screen and (max-width: 800px) {
  .page--resume__job.-is-current::before {
    font-size: 60px;
    top: -25px;
  }
}
@media screen and (max-width: 450px) {
  .page--resume__job.-is-current::before {
    left: -20px;
    top: -20px;
    font-size: 46px;
  }
}
.page--resume__job:nth-of-type(2)::before {
  content: 'Past Experience';
  white-space: nowrap;
  top: -34px;
  position: absolute;
  font-size: 94px;
  font-weight: 900;
  z-index: -1;
  // color: rgba(255, 167, 129, 0.2);
    color: ${({ theme: { bluecolor } }) => bluecolor};

}
.dark-mode .page--resume__job:nth-of-type(2)::before {
  color: rgba(105, 138, 252, 0.12);
}
@media screen and (max-width: 800px) {
  .page--resume__job:nth-of-type(2)::before {
    font-size: 60px;
    top: -25px;
  }
}
@media screen and (max-width: 450px) {
  .page--resume__job:nth-of-type(2)::before {
    left: -20px;
    top: -20px;
    font-size: 46px;
  }
}
.page--resume__job.-is-education {
  margin-top: 100px;
}
// @media screen and (max-width: 450px) {
//   .page--resume__job.-is-education {
//     margin-top: 0;
//   }
// }
.page--resume__job.-is-education::before {
  content: 'Education';
  white-space: nowrap;
  top: -34px;
  position: absolute;
  font-size: 94px;
  font-weight: 900;
  z-index: -1;
  // color: rgba(255, 167, 129, 0.2);
    color: ${({ theme: { bluecolor } }) => bluecolor};

}
.dark-mode .page--resume__job.-is-education::before {
  color: rgba(105, 138, 252, 0.12);
}
@media screen and (max-width: 800px) {
  .page--resume__job.-is-education::before {
    font-size: 60px;
    top: -25px;
  }
}
@media screen and (max-width: 450px) {
  .page--resume__job.-is-education::before {
    left: -20px;
    top: -20px;
    font-size: 46px;
  }
}
.page--resume__wrap {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
}
@media screen and (max-width: 800px) {
  .page--resume__wrap {
    flex-direction: column;
  }
}
.page--resume__details {
  margin-right: 70px;
  min-width: 170px;
}
@media screen and (max-width: 800px) {
  .page--resume__details {
    margin-bottom: 20px;
  }
}
.page--resume__details h3 {
  font-size: 17px;
  font-weight: 100;
  white-space: nowrap;
  margin: 5px 0 15px;
  color: #686D77;
}
.page--resume__location {
  font-size: 17px;
  font-weight: 100;
  white-space: nowrap;
  color: #686D77;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
}
.page--resume__location .icon--location {
  height: 19px;
  margin: 0 5px 0 -2px;
}
.page--resume__bullets {
  font-size: 15px;
  font-weight: 300;
}
.page--resume__bullets ul li {
  line-height: 1.6;
  margin-bottom: 10px;
}
@media screen and (max-width: 450px) {
  .page--resume__bullets {
    font-size: 13px;
  }
}
`;
export const BasicInformation = styled.section`
`;
export const SocialInformation = styled.section`
`;
export const MDInformation = styled.section`
`;
export const Button = styled.button`
`;

export const ResumePage = styled.section`

max-width: 800px;
margin: 0 auto;
`;