import { SET_SEARCH, LOAD_PRELOADER, LOAD_DATA_SUCCESS, LOAD_DATA_ERROR, DELETE_ITEM, SWITCH_FILTER } from '../actionTypes';

const initialState = {
  staticData: [],
  data: [],
  isLoading: true,
  error: '',
  searchValue: '',
  selectedEnumList: [],
  visibleColumns: {
    isAge: true,
    isSalary: true,
    isDistance: true,
    isHackedData: true,
    isStatus: true,
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRELOADER: {
      return {
        ...state,
        isLoading: false,
        error: '',
      };
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
        const result = state.data.filter(
          item =>
            item.firstName.toLowerCase().includes(action.searchValue.toLowerCase()) ||
            item.lastName.toLowerCase().includes(action.searchValue.toLowerCase()) ||
            item.address[0].city.toLowerCase().includes(action.searchValue.toLowerCase()) ||
            item.address[0].state.toLowerCase().includes(action.searchValue.toLowerCase())
        );
        return { ...state, data: result, searchValue: action.searchValue };
      }
      return { ...state, data: state.staticData, searchValue: action.searchValue };
    case SWITCH_FILTER:
      state.selectedEnumList = action.value;
      if (state.selectedEnumList.length > 0) {
        console.log(state.selectedEnumList);
        const result = state.data.filter(item => state.selectedEnumList.some(el => el === item.ageCategory));
        console.log(result);
        return { ...state, data: result };
      }
      return { ...state, data: state.staticData };

    default:
      return state;
  }
};

export default dataReducer;

// const result = action.selectedEnumList.map(selectedItem => {
//   console.log(selectedItem)
//   return state.data.filter(item => {
//     return item.ageCategory.includes(selectedItem);
//   });
// });
