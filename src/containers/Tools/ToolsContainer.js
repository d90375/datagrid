import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import TableNav from '../../components/TableNav/TableNav';
import { setEnumList, setSearch } from '../../store/actions/dataAction';

const ToolsLogicContainer = ({ searchRoute }) => {
  const dispatch = useDispatch();
  const { selectedEnumList, searchValueText } = useSelector(state => ({
    selectedEnumList: state.dataReducer.selectedEnumList,
    searchValueText: state.dataReducer.searchValue,
  }));

  useEffect(() => {
    const { SearchText } = queryString.parse(searchRoute);
    if (SearchText) {
      dispatch(setSearch(SearchText));
    }
  }, [searchRoute]);

  const handleChangeEnum = event => {
    dispatch(setEnumList(event.target.value));
  };
  const handleValueChanged = event => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <div>
      <TableNav
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
