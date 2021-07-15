import { Employee } from '../interfaces/employee';
import { EmployeeActionTypes, Action } from '../interfaces/types';

export const setErrors = (error: string): Action => ({
  type: EmployeeActionTypes.SET_ERRORS,
  payload: { message: error },
});

//
export const getEmployee = (employee: Employee[]): Action => ({
  type: EmployeeActionTypes.GET_EMPLOYEE,
  payload: employee,
});

export const deleteEmployee = (id: string): Action => ({
  type: EmployeeActionTypes.REMOVE_EMPLOYEE,
  payload: id,
});

export const updateEmployee = (employee: Employee): Action => ({
  type: EmployeeActionTypes.UPDATE_EMPLOYEE,
  payload: employee,
});

export const addEmployee = (employee: Employee): Action => ({
  type: EmployeeActionTypes.ADD_EMPLOYEE,
  payload: employee,
});

// request action creators
export const getEmployeesRequest = (): Action => ({
  type: EmployeeActionTypes.GETTING_EMPLOYEE,
});
export const updateEmployeeRequest = (employee: Employee): Action => ({
  type: EmployeeActionTypes.UPDATING_EMPLOYEE,
  payload: employee,
});
export const removeEmployeeRequest = (id: string): Action => ({
  type: EmployeeActionTypes.REMOVING_EMPLOYEE,
  payload: id,
});
export const addEmployeeRequest = (employee: Employee): Action => ({
  type: EmployeeActionTypes.ADDING_EMPLOYEE,
  payload: employee,
});
