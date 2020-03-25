import { combineReducers } from 'redux';
import selectReducer from './reducers/selectReducer';
import switchVirtReducer from './reducers/switchVirtReducer ';
import dataReducer from './reducers/dataReducer';
import columnReducer from './reducers/columnReducer';
import sortReducer from './reducers/sortReducer';

const rootReducer = combineReducers({
  sortReducer,
  columnReducer,
  selectReducer,
  switchVirtReducer,
  dataReducer,
});

export default rootReducer;
