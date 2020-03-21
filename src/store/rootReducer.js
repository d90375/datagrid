import { combineReducers } from 'redux';
import selectReducer from './reducers/select';
import switchVirtReducer from './reducers/switchVirtReducer ';
import searchReducer from './reducers/data';

const rootReducer = combineReducers({
  selectReducer,
  switchVirtReducer,
  searchReducer,
});

export default rootReducer;
