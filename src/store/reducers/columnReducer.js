import { SET_COLUMN_DISPLAY } from '../actionTypes';

const initialState = {
  visibleColumns: {
    isAge: true,
    isSalary: true,
    isDistance: true,
    isHackedData: true,
    isStatus: true,
  },
};

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
