import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import data from '../config/data/hackerData';

import MainTable from './MainTable/MainTable';
import TableNav from './MainTable/TableNav/TableNav';
import PreLoader from './ui/PreLoader/PreLoader';

import columns from '../config/column';

// ISO\u00a0Code
// Size\u00a0(km\u00b2)

//
// const StyledTableRow = withStyles((theme: Theme) =>
//     createStyles({
//       root: {
//         '&:nth-of-type(odd)': {
//           backgroundColor: theme.palette.background.default,
//         },
//       },
//     }),
// )(TableRow);]

const Main = () => {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  const searchHandler = inputSearch => {
    setSearch(inputSearch);
  };

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
      <Paper elevation={4} style={{ paddingBottom: '10px' }}>
        <TableNav onSearch={searchHandler} />
        {isLoading ? <MainTable rows={rows} columns={columns} /> : <PreLoader />}
      </Paper>
    </main>
  );
};

export default Main;
