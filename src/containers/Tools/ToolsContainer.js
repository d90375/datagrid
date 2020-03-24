import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableNav from '../../components/TableNav/TableNav';
import { setEnumList } from '../../store/actions/dataAction';

const ToolsLogicContainer = () => {
  const dispatch = useDispatch();
  const { selectedEnumList } = useSelector(state => ({
    selectedEnumList: state.dataReducer.selectedEnumList,
  }));

  const handleChangeEnum = event => {
    dispatch(setEnumList(event.target.value));
  };
  return (
    <div>
      <TableNav onChangeEnum={handleChangeEnum} selectedEnumList={selectedEnumList} />
    </div>
  );
};

export default ToolsLogicContainer;
