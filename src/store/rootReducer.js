import { combineReducers } from 'redux';
import selectReducer from './reducers/select';
import switchReducer from './reducers/switch';
import searchReducer from './reducers/data';

export default combineReducers({
  selectReducer,
  switchReducer,
  searchReducer,
});
