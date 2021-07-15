import { EmployeeActionTypes } from '../interfaces/types';
import { EmployeeState, initialEmployeeState } from '../interfaces/state';
import { Action } from '../interfaces/types';

const employeeReducer = (
  state: EmployeeState = initialEmployeeState,
  action: Action
): EmployeeState => {
  switch (action.type) {
    case EmployeeActionTypes.ADD_EMPLOYEE:
      return [...state, action.payload];

    case EmployeeActionTypes.REMOVE_EMPLOYEE:
      return state.filter(employee => employee._id !== action.payload);

    case EmployeeActionTypes.UPDATE_EMPLOYEE:
      const indexToUpdate = state.findIndex(
        employee => employee._id === action.payload._id
      );
      return [
        ...state.slice(0, indexToUpdate),
        action.payload,
        ...state.slice(indexToUpdate + 1),
      ];
    case EmployeeActionTypes.GET_EMPLOYEE:
      return action.payload;
    default:
      return state;
  }
};

export default employeeReducer;
