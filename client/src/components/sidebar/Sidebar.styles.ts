import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  height: 91vh;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  padding-top: 40px;
`;

export const SidebarItem = styled.div`
  cursor: pointer;
  border-right: 2px solid;
  opacity: 0.7;
  color: black;
  background: white;

  &:hover {
    color: #f07705;
    background: #f0770517;
  }
`;

export const SideItems = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  .fas {
    margin-right: 15px;
  }
  p {
    font-size: 20px;
  }
`;
