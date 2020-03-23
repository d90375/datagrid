import { DELETE_ITEM, LOAD_DATA_SUCCESS, LOAD_PRELOADER, SET_SEARCH } from '../actionTypes';
import data from '../../config/data/hackerData';

export const setSearch = searchValue => ({
  type: SET_SEARCH,
  searchValue,
});

export const delItem = selected => ({
  type: DELETE_ITEM,
  selected,
});

export const loadData = () => dispatch => {
  // eslint-disable-next-line no-return-assign
  data.map((item, index) => (item.id = index));
  dispatch({ type: LOAD_DATA_SUCCESS, data });
  setTimeout(() => {
    dispatch({ type: LOAD_PRELOADER });
  }, 1500);
};
