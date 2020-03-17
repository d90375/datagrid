import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import data from '../config/data/hackerData';

import MainTable from './MainTable/MainTable';
import TableNav from './MainTable/TableNav/TableNav';
import PreLoader from './ui/PreLoader/PreLoader';

import columns from '../config/column';

const Main = () => {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const search = useSelector(state => state.searchReducer);

  useEffect(() => {
    (async function load() {
      let id = 0;
      data
        .slice(0)
        .reverse()
        .map(item => {
          id += 1;
          // eslint-disable-next-line no-param-reassign
          item.id = id;
          return item.id;
        });
      setRows(data);
      setTimeout(() => {
        setIsLoading(true);
      }, 0);
    })();
  }, []);

  useEffect(() => {
    if (search !== '') {
      const result = data.filter(
        item => item.firstName.toLowerCase().includes(search.toLowerCase()) || item.lastName.toLowerCase().includes(search.toLowerCase())
      );
      setRows(result);
    } else {
      setRows(data);
    }
  }, [search]);

  return (
    <main>
      <Test />
      <Paper elevation={4} style={{ paddingBottom: '10px' }}>
        <TableNav />
        {isLoading ? <MainTable rows={rows} OldRows={rows} columns={columns} /> : <PreLoader />}
      </Paper>
    </main>
  );
};

export default Main;

const Test = () => {
  const dataUsers = [
    { login: 'Yauheni', time: '12:00' },
    { login: 'Alexandr', time: '13:00' },
    { login: 'Yauheni', time: '14:00' },
  ];

  const enterData = {};

  dataUsers.forEach(e => {
    if (!enterData[e.login]) {
      enterData[e.login] = 0;
    }

    enterData[e.login] += 1;
  });

  return <div></div>;
};
