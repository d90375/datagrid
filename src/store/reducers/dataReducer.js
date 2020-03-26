import { load } from 'redux-localstorage-simple';
import {
  SET_SEARCH,
  LOAD_PRELOADER,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_ERROR,
  DELETE_ITEM,
  SWITCH_FILTER,
  BOOL_ACTIVE_FILTER,
  BOOL_DISABLE_FILTER,
} from '../actionTypes';

const DATA = load({ namespace: 'grid' });
let dataState = DATA.dataReducer;

if (!DATA || !dataState) {
  dataState = {
    searchValue: '',
    selectedEnumList: [],
    isLoading: true,
    staticData: [],
    data: [],
    error: '',
    activeBool: false,
    disableBool: false,
    isSearchFilter: false,
    isSwitchFilter: false,
    isActiveFilter: false,
    isDisableFilter: false,
  };
}

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case LOAD_PRELOADER: {
      return {
        ...state,
        isLoading: false,
        error: '',
      };
    }
    case BOOL_ACTIVE_FILTER: {
      if (!state.activeBool) {
        const result = state.staticData.filter(item => item.status !== state.activeBool && !state.disableBool);
        return { ...state, data: result, activeBool: !state.activeBool };
      }
      return { ...state, data: state.staticData, activeBool: !state.activeBool };
    }
    case BOOL_DISABLE_FILTER: {
      if (!state.disableBool) {
        const result = state.staticData.filter(item => item.status === state.disableBool && !state.activeBool);
        return { ...state, data: result, disableBool: !state.disableBool };
      }
      return { ...state, data: state.staticData, disableBool: !state.disableBool };
    }
    case LOAD_DATA_SUCCESS: {
      return {
        ...state,
        staticData: action.data,
        data: action.data,
        isLoading: true,
      };
    }
    case LOAD_DATA_ERROR: {
      return {
        ...state,
        isLoading: true,
        error: action.error,
      };
    }
    case DELETE_ITEM: {
      if (action.selected.length === 0) {
        return { ...state };
      }
      const notSelectedCorrect = id => action.selected.indexOf(id) === -1;
      const newData = state.data.filter(item => notSelectedCorrect(+item.id));
      return { ...state, data: newData };
    }
    case SET_SEARCH:
      if (action.searchValue !== '') {
        const result = state.staticData.filter(
          item =>
            item.firstName.toLowerCase().includes(action.searchValue.toLowerCase()) ||
            item.lastName.toLowerCase().includes(action.searchValue.toLowerCase()) ||
            item.address.city.toLowerCase().includes(action.searchValue.toLowerCase()) ||
            item.address.state.toLowerCase().includes(action.searchValue.toLowerCase())
        );
        return { ...state, data: result, searchValue: action.searchValue };
      }
      return { ...state, data: state.staticData, searchValue: action.searchValue };
    case SWITCH_FILTER:
      state.selectedEnumList = action.value;
      if (state.selectedEnumList.length > 0) {
        const result = state.staticData.filter(item => action.value.some(el => el === item.ageCategory));
        return { ...state, data: result };
      }
      return { ...state, data: state.staticData };
    default:
      return state;
  }
};

export default dataReducer;
