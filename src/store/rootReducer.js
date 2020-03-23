import { combineReducers } from 'redux';
import selectReducer from './reducers/selectReducer';
import switchVirtReducer from './reducers/switchVirtReducer ';
import dataReducer from './reducers/dataReducer';

const rootReducer = combineReducers({
  selectReducer,
  switchVirtReducer,
  dataReducer,
});

export default rootReducer;
