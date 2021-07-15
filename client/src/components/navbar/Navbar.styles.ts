import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 80px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 70px;

  img {
    width: 4rem;
    height: 4rem;
  }
`;
