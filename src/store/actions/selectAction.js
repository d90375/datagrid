import { SELECT_ALL_ITEMS, SELECT_ITEM } from '../actionTypes';

export const setRowSelected = id => ({
  type: SELECT_ITEM,
  id,
});

export const setAllRowSelected = (event, rows) => ({
  type: SELECT_ALL_ITEMS,
  event,
  rows,
});
