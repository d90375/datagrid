import {
  DELETE_ITEM,
  LOAD_DATA_SUCCESS,
  LOAD_PRELOADER,
  SET_SEARCH,
  SWITCH_FILTER,
  BOOL_ACTIVE_FILTER,
  BOOL_DISABLE_FILTER,
} from '../actionTypes';
import data from '../../config/data/hackerData';

export const setSearch = searchValue => ({
  type: SET_SEARCH,
  searchValue,
});

export const delItem = selected => ({
  type: DELETE_ITEM,
  selected,
});

export const setEnumList = value => ({
  type: SWITCH_FILTER,
  value,
});

export const toggleActiveStatus = () => ({
  type: BOOL_ACTIVE_FILTER,
});

export const toggleDisableStatus = () => ({
  type: BOOL_DISABLE_FILTER,
});

export const loadData = () => dispatch => {
  // eslint-disable-next-line no-return-assign
  data.map((item, index) => (item.id = index));
  dispatch({ type: LOAD_DATA_SUCCESS, data });
  setTimeout(() => {
    dispatch({ type: LOAD_PRELOADER });
  }, 1500);
};
