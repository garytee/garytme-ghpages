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
`;
