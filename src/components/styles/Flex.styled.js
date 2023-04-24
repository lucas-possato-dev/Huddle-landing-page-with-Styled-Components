import styled from 'styled-components';

export const Flex = styled.div `
  display: flex;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }

  p {
    margin-bottom: 30px;
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }

`