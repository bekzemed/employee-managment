import { combineReducers } from 'redux';
import employeeReducer from './store/reducers';
const rootReducer = combineReducers({
  employees: employeeReducer,
});

export type State = ReturnType<typeof rootReducer>;
export default rootReducer;
