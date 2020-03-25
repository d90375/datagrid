import columns from '../../config/column';
import { CHANGE_ORDER, LOAD_COLUMN } from '../actionTypes';

export const loadColumns = () => dispatch => {
  dispatch({ type: LOAD_COLUMN, columns });
};

export const setOrderList = orderList => ({
  type: CHANGE_ORDER,
  orderList,
});
