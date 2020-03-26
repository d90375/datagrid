import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import TableNav from '../../components/TableNav/TableNav';
import { setEnumList, setSearch } from '../../store/actions/dataAction';

import visibleGridCSV from '../../utils/visibleGridCSV';
import visibleHeaderCSV from '../../utils/visibleHeaderCSV';

const ToolsLogicContainer = ({ searchRoute }) => {
  const dispatch = useDispatch();
  const { selectedEnumList, searchValueText, data, columns } = useSelector(state => ({
    columns: state.columnReducer.visibleColumns,
    data: state.dataReducer.data,
    selectedEnumList: state.dataReducer.selectedEnumList,
    searchValueText: state.dataReducer.searchValue,
  }));

  useEffect(() => {
    const { ENUM, SearchText } = queryString.parse(searchRoute);
    if (ENUM || SearchText) {
      dispatch(setSearch(SearchText));
      dispatch(setEnumList([+ENUM]));
    }
  }, [dispatch, searchRoute]);

  const handleChangeEnum = event => {
    dispatch(setEnumList(event.target.value));
  };
  const handleValueChanged = event => {
    dispatch(setSearch(event.target.value));
  };
  const handleSaveCSV = () => {
    const header = visibleHeaderCSV(columns);
    const file = data.reduce((acc, label) => {
      const grid = visibleGridCSV(columns, label);
      return `${acc}${grid}\n`;
    }, `${header}\n`);
    const node = document.createElement('a');
    node.download = `csvFile-${new Date()}.csv`;
    node.href = URL.createObjectURL(new Blob([file], { type: 'application/csv' }));
    node.click();
  };

  return (
    <div>
      <TableNav
        onSaveCSV={handleSaveCSV}
        onChangeEnum={handleChangeEnum}
        selectedEnumList={selectedEnumList}
        onValueChanged={handleValueChanged}
        searchValueText={searchValueText}
      />
    </div>
  );
};

export default ToolsLogicContainer;

ToolsLogicContainer.propTypes = {
  searchRoute: PropTypes.string.isRequired,
};
