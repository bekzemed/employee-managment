import { call, put, PutEffect, CallEffect } from 'redux-saga/effects';
import { URL, apiData } from '../api/api';
import { Employee } from '../interfaces/employee';
import {
  addEmployee,
  deleteEmployee,
  getEmployee,
  setErrors,
  updateEmployee,
} from './actions';
import { Action } from '../interfaces/types';

// fetch employees
export function* getEmployeeSaga(
  action: Action
): Generator<CallEffect<any> | PutEffect<Action>, void, Employee[]> {
  try {
    const employee = yield call(apiData, URL.BASE_URL, null, 'GET');

    yield put(getEmployee(employee));
  } catch (error) {
    yield put(setErrors(error));
  }
}

// update employee
export function* updateEmployeeSaga(
  action: Action
): Generator<CallEffect<any> | PutEffect<Action>, void, Employee> {
  try {
    yield call(
      apiData,
      URL.BASE_URL + `/${action.payload._id}`,
      action.payload,
      'PATCH'
    );
    yield put(updateEmployee(action.payload));
  } catch (error) {
    yield put(setErrors(error));
  }
}

// add employee
export function* addEmployeeSaga(
  action: Action
): Generator<CallEffect<any> | PutEffect<Action>, void, Employee> {
  try {
    const addedEmployee = yield call(
      apiData,
      URL.BASE_URL,
      action.payload,
      'POST'
    );

    yield put(addEmployee(addedEmployee));
  } catch (error) {
    yield put(setErrors(error));
  }
}

// delete employee
export function* removeEmployeeSaga(
  action: Action
): Generator<CallEffect<any> | PutEffect<Action>, void, string> {
  try {
    yield call(apiData, URL.BASE_URL + `/${action.payload}`, null, 'DELETE');
    yield put(deleteEmployee(action.payload));
  } catch (error) {
    yield put(setErrors(error));
  }
}
