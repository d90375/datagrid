import { SET_COLUMN_DISPLAY } from '../actionTypes';

export const setVisibleColumn = columnListBool => ({
  type: SET_COLUMN_DISPLAY,
  columnListBool,
});
