import { load } from 'redux-localstorage-simple';
import { SET_COLUMN_DISPLAY } from '../actionTypes';

const DATA = load({ namespace: 'grid' });
let initialState = DATA.columnReducer;

if (!initialState) {
  initialState = {
    visibleColumns: {
      isAge: true,
      isSalary: true,
      isDistance: true,
      isHackedData: true,
      isStatus: true,
    },
  };
}

const columnReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLUMN_DISPLAY: {
      return { ...state, visibleColumns: action.columnListBool };
    }
    default:
      return state;
  }
};

export default columnReducer;
