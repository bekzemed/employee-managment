import { all, takeLatest } from 'redux-saga/effects';

import { EmployeeActionTypes } from '../interfaces/types';
import {
  addEmployeeSaga,
  getEmployeeSaga,
  removeEmployeeSaga,
  updateEmployeeSaga,
} from './sagas';

function* rootSaga() {
  yield all([
    takeLatest(EmployeeActionTypes.ADDING_EMPLOYEE, addEmployeeSaga),
    takeLatest(EmployeeActionTypes.GETTING_EMPLOYEE, getEmployeeSaga),
    takeLatest(EmployeeActionTypes.REMOVING_EMPLOYEE, removeEmployeeSaga),
    takeLatest(EmployeeActionTypes.UPDATING_EMPLOYEE, updateEmployeeSaga),
  ]);
}

export default rootSaga;
