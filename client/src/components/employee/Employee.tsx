import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEmployeesRequest,
  removeEmployeeRequest,
} from '../../redux/store/actions';
import EmployeeModal from '../employee-modal/EmployeeModal';
import {
  Wrapper,
  EmployeeText,
  EmployeeStat,
  EmployeeStatContainer,
  TotalEmployeeContainer,
  EmployeeItemContainer,
  EmployeeTableItem,
  EmployeeRowItem,
  RowIcon,
  ButtonContainer,
} from './Employee.styles';
import { Button } from '@material-ui/core';
import { State } from '../../redux/root-reducer';

const Employee: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentUserId, setCurrentUserId] = useState<string>('');

  useEffect(() => {
    dispatch(getEmployeesRequest());
  }, [dispatch]);

  const handleModalOpen = (id: string) => {
    setShowModal(true);
    setCurrentUserId(id);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDeleteEmployee = (id: string) => {
    dispatch(removeEmployeeRequest(id));
  };

  const handleAddButton = () => {
    setShowModal(true);
    setCurrentUserId('');
  };
  return (
    <Wrapper>
      {showModal && (
        <EmployeeModal
          handleClose={handleModalClose}
          employee={state.employees?.find(
            employee => employee._id === currentUserId
          )}
        />
      )}
      <EmployeeText>Employee Managment</EmployeeText>

      <EmployeeStatContainer>
        <EmployeeStat>
          <i className="fas fa-male"></i>
          <TotalEmployeeContainer>
            <span> Male Employee</span>
            <span className="number">
              {' '}
              {
                state.employees?.filter(employee => employee.gender === 'Male')
                  .length
              }
            </span>
          </TotalEmployeeContainer>
        </EmployeeStat>

        <EmployeeStat>
          <i className="fas fa-user-friends"></i>
          <TotalEmployeeContainer>
            <span>Total Employee</span>

            <span className="number"> {state.employees.length}</span>
          </TotalEmployeeContainer>
        </EmployeeStat>

        <EmployeeStat>
          <i className="fas fa-female"></i>
          <TotalEmployeeContainer>
            <span> Female Employee</span>

            <span className="number">
              {' '}
              {
                state.employees?.filter(
                  employee => employee.gender === 'Female'
                ).length
              }
            </span>
          </TotalEmployeeContainer>
        </EmployeeStat>
      </EmployeeStatContainer>

      {state.employees.length ? (
        <div>
          <EmployeeItemContainer>
            <EmployeeTableItem>
              <div>Number</div>
              <div>Name</div>
              <div>Gender</div>
              <div>Date of Birth</div>
              <div>Salary</div>
              <div className="action">Actions</div>
            </EmployeeTableItem>
            {state.employees.map((employee, index) => (
              <EmployeeRowItem key={employee._id}>
                <div>{index + 1}</div>
                <div>{employee.name}</div>
                <div>{employee.gender}</div>
                <div>{employee.birth.substr(0, 10)}</div>
                <div>${employee.salary}</div>
                <RowIcon>
                  <i
                    className="far fa-edit"
                    onClick={() => handleModalOpen(employee._id)}
                  ></i>
                  <i
                    className="far fa-trash-alt"
                    onClick={() => handleDeleteEmployee(employee._id)}
                  ></i>
                </RowIcon>
              </EmployeeRowItem>
            ))}
          </EmployeeItemContainer>
          <ButtonContainer>
            <Button variant="contained" onClick={handleAddButton}>
              Add Employee
            </Button>
          </ButtonContainer>
        </div>
      ) : (
        <div>
          <h4>No Employee Found</h4>
          <ButtonContainer>
            <Button variant="contained" onClick={handleAddButton}>
              Add Employee
            </Button>
          </ButtonContainer>
        </div>
      )}
    </Wrapper>
  );
};

export default Employee;
