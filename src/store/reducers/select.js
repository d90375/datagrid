import { SELECT_ALL_ITEMS, SELECT_ITEM } from '../actionTypes';

const selectReducer = (state = [], action) => {
  let selectedIndex;
  let newSelected;
  switch (action.type) {
    case SELECT_ITEM:
      selectedIndex = state.indexOf(action.id);
      newSelected = [];
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(state, action.id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(state.slice(1));
      } else if (selectedIndex === state.length - 1) {
        newSelected = newSelected.concat(state.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(state.slice(0, selectedIndex), state.slice(selectedIndex + 1));
      }
      return newSelected;
    case SELECT_ALL_ITEMS:
      if (action.event.target.checked) {
        newSelected = action.rows.map(n => n.id);
        return newSelected;
      }
      return [];

    default:
      return state;
  }
};

export default selectReducer;
