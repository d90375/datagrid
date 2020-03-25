import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainTable from '../../components/MainTable/MainTable';
import { delItem, loadData } from '../../store/actions/dataAction';
import PreLoader from '../../components/ui/PreLoader/PreLoader';
import { setAllRowSelected } from '../../store/actions/selectAction';
import ToolsLogicContainer from '../Tools/ToolsContainer';
import { setVisibleColumn } from '../../store/actions/columnAction';
import { SORT_ASC, SORT_DESC } from '../../constants';
import { loadColumns, setOrderList } from '../../store/actions/sortAction';

const TableLogicContainer = () => {
  const dispatch = useDispatch();
  const { isVirt, data, isLoading, selected, visibleColumns, columnSettings } = useSelector(state => ({
    columnSettings: state.sortReducer.columnSettings,
    visibleColumns: state.columnReducer.visibleColumns,
    isVirt: state.switchVirtReducer.isVirt,
    data: state.dataReducer.data,
    isLoading: state.dataReducer.isLoading,
    selected: state.selectReducer,
  }));

  useEffect(() => {
    dispatch(loadData());
    dispatch(loadColumns());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [order, setOrder] = useState(SORT_ASC);
  const [orderBy, setOrderBy] = useState('id');

  const handleCreateSort = property => event => {
    const indexEvent = columnSettings.findIndex(el => property.id === el.id);
    const currentColumnSettings = columnSettings[indexEvent];

    let newStateColumnSettings = columnSettings;
    const isAsc = currentColumnSettings.id === property.id && currentColumnSettings.order === SORT_ASC;
    newStateColumnSettings[indexEvent].order = isAsc ? SORT_DESC : SORT_ASC;

    if (!event.shiftKey) {
      newStateColumnSettings = newStateColumnSettings.map(el => ({ ...el, isSorted: false, isShift: false, queue: 1 }));
    } else {
      columnSettings.forEach(el => {
        el.isShift = true;
        if (currentColumnSettings.isSorted && currentColumnSettings.queue > el.queue) {
          el.queue += 1;
        }
        if (el.isSorted && !currentColumnSettings.isSorted) {
          el.queue += 1;
        }
      });
      currentColumnSettings.queue = 1;
    }
    newStateColumnSettings[indexEvent].isSorted = true;

    dispatch(setOrderList(newStateColumnSettings));
    setOrder(newStateColumnSettings[indexEvent].order);
    setOrderBy(property.id);
  };

  const handleChangeVisible = name => event => {
    dispatch(setVisibleColumn({ ...visibleColumns, [name]: event.target.checked }));
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
          columns={columnSettings}
          visibleColumns={visibleColumns}
          isVirt={isVirt}
          order={order}
          orderBy={orderBy}
          onDelete={handleDelete}
          onCreateSort={handleCreateSort}
          onSelectAllClick={handleSelectAllClick}
          onChangeVisible={handleChangeVisible}
          selected={selected}
        />
      )}
    </>
  );
};

export default TableLogicContainer;
