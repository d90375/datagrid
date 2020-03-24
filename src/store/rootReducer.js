import { combineReducers } from 'redux';
import selectReducer from './reducers/selectReducer';
import switchVirtReducer from './reducers/switchVirtReducer ';
import dataReducer from './reducers/dataReducer';
import columnReducer from './reducers/columnReducer';

const rootReducer = combineReducers({
  columnReducer,
  selectReducer,
  switchVirtReducer,
  dataReducer,
});

export default rootReducer;
