import { load } from 'redux-localstorage-simple';
import { LOAD_COLUMN, CHANGE_ORDER } from '../actionTypes';
import columns from '../../config/column';

const DATA = load({ namespace: 'grid' });
let initialState = DATA.sortReducer;

if (!initialState) {
  initialState = {
    columnsSettings: columns,
  };
}

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COLUMN:
      return { ...state, columnSettings: action.columns };
    case CHANGE_ORDER:
      return { ...state, columnSettings: action.orderList };
    default:
      return state;
  }
};

export default sortReducer;
