import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #cccccc59;
  padding: 40px 25px;
  width: 100%;
  position: relative;
`;

export const EmployeeText = styled.div`
  font-size: 23px;
  font-weight: 700;
  margin-bottom: 35px;
`;

export const EmployeeStatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const EmployeeStat = styled.div`
  width: 350px;
  height: 150px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  .fas {
    font-size: 50px;
    margin-right: 15px;
    opacity: 0.7;
  }
`;

export const TotalEmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  opacity: 0.7;

  .number {
    margin: auto;
  }
`;

export const EmployeeItemContainer = styled.div`
  width: 100%;
  background: white;
  height: fit-content;
  padding: 15px 0;
  border-radius: 5px;
  margin-bottom: 25px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

export const EmployeeTableItem = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;

  .action {
    display: flex;
    justify-content: center;
  }

  div {
    width: 100px;
  }
`;

export const EmployeeRowItem = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  div {
    display: flex;
    align-items: center;
    width: 100px;
  }
`;

export const RowIcon = styled.div`
  display: flex;
  justify-content: space-between;

  .fa-edit {
    color: green;
    cursor: pointer;
  }
  .fa-trash-alt {
    color: red;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
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
