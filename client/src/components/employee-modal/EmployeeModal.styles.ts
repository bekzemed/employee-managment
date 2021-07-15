import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  height: 445px;
  background: #edf2f7;
  border-radius: 5px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  z-index: 1;
  padding: 25px;
`;

export const EmployeeModalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;

  .fa-times {
    display: flex;
    justify-content: end;
    font-size: 20px;
    cursor: pointer;
    width: 35px;
    display: flex;
    justify-content: center;
    height: 35px;
    align-items: center;
    border-radius: 30px;

    &:hover {
      color: #f07705;
      background: #ff00000a;
    }
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 15px;

  button {
    text-transform: capitalize;
    color: white;
    background: #f07705;
    border: 1px solid #f07705;
    &:hover {
      border: 1px solid #f07705;
      color: black;
      background: white;
    }
  }
`;
