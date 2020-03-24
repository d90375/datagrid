import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainTable from '../../components/MainTable/MainTable';
import { delItem, loadData } from '../../store/actions/dataAction';
import PreLoader from '../../components/ui/PreLoader/PreLoader';
import columns from '../../config/column';
import { setAllRowSelected } from '../../store/actions/selectAction';
import ToolsLogicContainer from '../Tools/ToolsContainer';

const TableLogicContainer = () => {
  const dispatch = useDispatch();
  const { isVirt, data, isLoading, selected } = useSelector(state => ({
    isVirt: state.switchVirtReducer.isVirt,
    data: state.dataReducer.data,
    isLoading: state.dataReducer.isLoading,
    selected: state.selectReducer,
  }));

  useEffect(() => {
    dispatch(loadData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleCreateSort = property => event => {
    handleRequestSort(event, property);
  };

  const handleSelectAllClick = event => {
    dispatch(setAllRowSelected(event, data));
  };

  const handleDelete = () => {
    dispatch(delItem(selected));
  };

  return (
    <>
      <ToolsLogicContainer />
      {isLoading ? (
        <PreLoader />
      ) : (
        <MainTable
          rows={data}
          columns={columns}
          isVirt={isVirt}
          order={order}
          orderBy={orderBy}
          onDelete={handleDelete}
          onCreateSort={handleCreateSort}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          selected={selected}
        />
      )}
    </>
  );
};

export default TableLogicContainer;
