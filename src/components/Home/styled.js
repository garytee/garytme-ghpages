import styled from 'styled-components';
export const Title = styled.h1`
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
text-align: center;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
`;
export const PortfolioCards = styled.ul`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
margin-top: 40px;
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
export const Img = styled.img`
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
export const Welcome = styled.div`
#welcome-section {
  background-color: ${({ theme: { homeherobackground } }) => homeherobackground};
  transition: all 0.6s ease;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  z-index: 1;
}
#welcome-section::before {
  content: '';
  position: fixed;
  background-attachment: fixed;
  width: 100%;
  min-height: 100vh;
  z-index: -1;
  opacity: 0;
  animation: stars-move-in 1000ms 300ms forwards;
}
@keyframes stars-move-in {
  from {
    background-position-y: -100px;
  }
  to {
    opacity: 1;
    background-position-y: 0;
  }
}
.forest {
  position: absolute;
  bottom: -300px;
  left: 0;
  background-size: cover;
  width: 100%;
  height: 80%;
  opacity: 0;
  border-bottom: 300px solid ${({ theme: { homeherobackground } }) => homeherobackground};
  opacity: 1;
}
.silhouette {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 50%;
  opacity: 0;
  animation: silhouette-move-in 1000ms 800ms forwards;
}
@keyframes silhouette-move-in {
  from {
    background-position-x: 0;
  }
  to {
    opacity: 1;
    background-position-x: 50%;
  }
}
.moon {
  position: absolute;
  top: 0;
  right: 0;
  position: fixed;
  background-size: 40% 40%;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  animation: moon-move-in 1.2s 1s forwards;
}
@keyframes moon-move-in {
  from {
    opacity: 0;
    background-position: right 150%;
  }
  to {
    opacity: 1;
    background-position: top right;
  }
}
/* Copy and CTA */
#welcome-section .container {
  width: fit-content;
  position: absolute;
  right: 0;
  top: 50%;
  right: 25%;
  opacity: 0;
  transform: translate(0, -50%);
  animation: text-fade-in 1000ms 800ms forwards;
}
@keyframes text-fade-in {
  from {
    right: 0;
  }
  to {
    opacity: 1;
    right: 25%;
  }
}
#welcome-section .container h1 {
  font-size: 4rem;
  font-weight: normal;
  font-style: italic;
  line-height: 3rem;
}
#welcome-section .container h1 .line:first-child {
  margin-left: 1rem;
}
#welcome-section .container h1 .line:last-child {
  margin-left: 2rem;
}
#welcome-section .container .buttons {
  display: flex;
  margin-top: 1rem;
}
#welcome-section .container .buttons a,
#welcome-section .container .buttons a:visited {
  width: 100%;
  padding: 1rem;
  border: 1px solid #fafafa;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
}
#welcome-section .container .buttons a:hover,
#welcome-section .container .buttons a:active {
  border: 1px solid #f300b4;
  transform: translateY(-2px);
  box-shadow: 0 10px 100px -20px #f300b4;
}
#welcome-section .container .buttons a.cta,
#welcome-section .container .buttons a.cta:visited {
  background: #f300b4;
  border: 1px solid transparent;
  font-weight: bold;
}
#welcome-section .container .buttons a.cta:hover,
#welcome-section .container .buttons a.cta:active {
  background: transparent;
  border: 1px solid #f300b4;
}
#welcome-section .container .buttons a:first-child {
  margin-right: 1rem;
}
.line {
  display: block;
}
.color {
  font-style: italic;
}
@media only screen and (max-width: 649px) {
  #welcome-section .container {
    right: 50%;
    top: 10%;
    width: 80%;
    transform: translate(50%, 0);
    animation: text-fade-in 1000ms 800ms forwards;
  }
  @keyframes text-fade-in {
    from {
      right: 0;
    }
    to {
      opacity: 1;
      right: 50%;
    }
  }
  .silhouette {
    width: 100%;
  }
}
#about {
  height: 100%;
  min-height: 100vh;
  font-size: 1.4rem;
  position: relative;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  clip-path: polygon(0 0, 20% 5%, 100% 0, 100% 100%, 80% 95%, 0 100%);
  z-index: 5;
  background-attachment: fixed;
  margin-bottom: -300px;
}
#about .wrapper {
  padding: 15rem 10rem 12rem;
  height: 100%;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
}
#about article {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  padding: 3rem 0;
}
#about .title {
  grid-column-end: span 4;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#about .title h3 {
  font-size: 2.4rem;
}
#about .separator {
  background: #2264AA;
  width: 150px;
  height: 2px;
  margin: 1rem 0;
  padding: 0;
}
#about .subtitle {
  font-size: 1.6rem;
  text-align: center;
  padding-bottom: 1.5rem;
}
#about p {
  padding-bottom: 1.5rem;
  line-height: 1.9rem;
}
#about .desc.full {
  grid-column-end: span 4;
  margin-bottom: 2rem;
}
#about .desc {
  grid-column-end: span 2;
  padding: 2rem;
  text-align: justify;
}
@media only screen and (max-width: 1149px) {
  #about article {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
  #about .desc.full {
    grid-column-end: -1;
  }
  #about .desc {
    grid-column-end: -1;
  }
}
@media only screen and (max-width: 949px) {
  #about {
    clip-path: polygon(0 0, 20% 2%, 100% 0, 100% 100%, 80% 98%, 0 100%);
    background-position: top left;
    background-size: cover;
  }
}
@media only screen and (max-width: 649px) {
  #about .wrapper {
    padding: 10rem 2rem 8rem;
  }
}
#projects {
  min-height: 100vh;
  font-size: 1.4rem;
  position: relative;
  background-color: ${({ theme: { homeherobackground } }) => homeherobackground};
  margin-top: -10rem;
  z-index: 1;
}
#projects a,
#projects a:visited {
}
#projects a:hover,
#projects a:active {
}
/* Container */
#projects .projects-container {
  margin: 0 auto;
  width: 100%;
  padding: 12rem 5rem 8rem;
  position: relative;
  bottom: -300px;
  border-bottom: 300px solid ${({ theme: { homeherobackground } }) => homeherobackground};
}
/* Heading */
#projects .heading .title {
  text-align: center;
  font-size: 2.4rem;
  line-height: 2.4rem;
}
#projects .heading .separator {
  background: #f300b4;
  width: 150px;
  height: 2px;
  margin: 1rem auto;
}
#projects .heading .subtitle {
  font-size: 1.4rem;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  text-align: justify;
}
/* Single Project */
#projects .project {
  margin: 1rem auto;
  width: 70%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2rem;
}
/* Project Image */
#projects .project .project-link {
  display: block;
  margin: auto 0;
  overflow: hidden;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #fafafa;
  box-shadow: 0 20px 10px -10px #25293450;
  transition: 300ms;
}
#projects .project .project-link:hover {
  box-shadow: 0 50px 15px -30px #25293450;
}
#projects .project .project-link:hover > img {
  filter: saturate(1);
  transform: scale(1.05);
}
#projects .project .project-image {
  width: 100%;
  transform: scale(1.2);
  filter: saturate(0);
  transition: all 300ms;
}
/* Project Details */
#projects .project .project-details {
  margin: auto 0;
}
#projects .project-details .project-tile {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 0;
  // color: #f300b4;
}
/* Icons */
#projects .project-details .icons {
  margin: 0;
}
#projects .project-details .icons i {
  margin-right: .4rem;
  font-weight: normal;
  font-size: 1.4rem;
}
/* Text */
#projects .project-details small {
  font-style: italic;
}
#projects .project-details p {
  margin: 1rem 0;
}
/* Buttons */
#projects .project-details .buttons {
  display: flex;
  justify-content: space-between;
}
#projects .project-details .buttons a {
  width: 49%;
  padding: .5rem;
  border: none;
  border-bottom: 1px solid #f300b4;
  background: #fafafa;
  font-size: 1.2rem;
  text-align: center;
}
#projects .project-details .buttons a:hover {
  background: #f300b4;
}
#projects .project-details .buttons i {
  font-size: .8rem;
  vertical-align: middle;
  margin-left: .5rem;;
}
@media only screen and (max-width: 1149px) {
  #projects .project {
    grid-template-columns: 1fr 2fr;
  }
}
@media only screen and (max-width: 949px) {
  #projects .project {
    grid-template-columns: 1fr;
  }
}
@media only screen and (max-width: 649px) {
  #projects {
    background: #f0f0f0;
  }
  #projects .projects-container {
    padding: 12rem 0 8rem;
  }
  #projects .project {
    padding: 2rem 0;
  }
}
#contact {
  background-color: ${({ theme: { homeherobackground } }) => homeherobackground};
  clip-path: polygon(0 0, 20% 100px, 100% 0, 100% 100%, 0 100%);
  min-height: 100vh;
  width: 100%;
  padding: 5rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}
#contact .container {
  width: 70%;
  max-width: 1200px;
  padding: 25vh 0;
}
#contact .container .heading-wrapper {
  display: flex;
  justify-content: space-between;
}
.heading-wrapper .heading .title {
  font-size: 3rem;
  line-height: 2.4rem;
}
.heading-wrapper .heading .separator {
  background: #f300b4;
  width: 150px;
  height: 2px;
  margin: 1rem 0;
}
.heading-wrapper .heading .subtitle {
  font-size: 1.4rem;
}
#contact-form {
  margin-top: 1rem;
}
input, textarea {
  border: none;
  padding: 1rem;
  font-family: 'Overlock', Arial, Helvetica, sans-serif;
  width: 100%;
  height: 40%;
  transition: 200ms;
}
input[type="text"],
input[type="email"],
input[type="text"]:not(output):not(:focus),
input[type="email"]:not(output):not(:focus),
textarea {
  border-bottom: 1px solid #fafafa;
  background: transparent;
  font-size: 1.8rem;
  box-shadow: none;
  outline: none;
}
input[type="text"]:focus,
input[type="email"]:focus,
input[type="text"]:not(output):focus,
input[type="email"]:not(output):focus,
textarea:focus {
  border-bottom: 1px solid #f300b4;
}
input[type="submit"] {
  background: #f300b4;
  margin-top: 1rem;
  width: auto;
  float: right;
}
input[type="submit"]:hover,
input[type="submit"]:focus {
  cursor: pointer;
  background: #fafafa;
}
::placeholder {
  // color: #fafafa;
}
/** Email to avoid spam **/
.mail {
  display: inline-block;
  font-style: italic;
}
.mail .at, .mail .dot {
  font-size: .9rem;
  margin: 0 .1rem;
}
@media only screen and (max-width: 1149px) {
  #contact .social a {
    display: block;
  }
}
@media only screen and (max-width: 649px) {
  #contact {
    clip-path: polygon(0 0, 20% 5%, 100% 0, 100% 100%, 0 100%);
    padding: 0;
  }
}
`;
