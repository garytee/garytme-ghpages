import styled from 'styled-components';


export const Wrapper = styled.div`
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  transition: all 0.6s ease;



    display: flex;
    min-height: 100vh;
    flex-direction: column;

    main{
    	flex-grow: 1;
    }

// main{
//    min-height: 100vh; /* will cover the 100% of viewport */
//  overflow: hidden;
//  display: block;
//  position: relative;
// }

// footer{
//   display: none;
// }
//   @media print {
//     & > nav,
//     & > footer {
//       display: none;
//     }

//     & > main {
//       & > section {
//         padding: 0;
//       }
//     }

//     button {
//       display: none;
//     }
//   }
`;
