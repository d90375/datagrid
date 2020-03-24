import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import PropTypes, { array, arrayOf, func } from 'prop-types';

import Search from './Search/Search';
import VirtualizeLabel from './ControlLabel/VirtulizeLabel';
import EnumFilter from './EnumFilter/EnumFilter';
import SaveCSV from './SaveCSV/SaveCSV';
import QueryString from './QueryString/QueryString';

const useStyles = makeStyles({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    borderTopLeftRadius: '.4rem',
    borderTopRightRadius: '.4rem',
    height: '150px',
    background: 'linear-gradient(90deg, rgba(70, 74, 148, 1) 5%, rgba(126, 83, 180, 1) 81%, rgba(115, 82, 173, 1) 100%)',
  },
  leftNavContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  rightNavContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    marginTop: '1.8rem',
    display: 'flex',
    flexDirection: 'row',
    marginRight: '2.5rem',
  },
});

const TableNav = ({ onChangeEnum, selectedEnumList }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.nav}>
        <div className={classes.leftNavContainer}>
          <Search />
          <EnumFilter onChangeEnum={onChangeEnum} selectedEnumList={selectedEnumList} />
        </div>
        <div className={classes.rightNavContainer}>
          <VirtualizeLabel />
          <div className={classes.buttonContainer}>
            <QueryString />
            <SaveCSV />
          </div>
        </div>
      </div>
    </>
  );
};

export default TableNav;

TableNav.propTypes = {
  onChangeEnum: PropTypes.func.isRequired,
  selectedEnumList: PropTypes.arrayOf(PropTypes.number).isRequired,
};
