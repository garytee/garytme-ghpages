import styled from 'styled-components';

export const FooterWrapper = styled.section`
background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
transition: all 0.6s ease;
`;

export const FooterContent = styled.div`
text-align: center;
padding: 20px;
`;