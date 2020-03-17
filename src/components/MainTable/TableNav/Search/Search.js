import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../../../store/actions/data';

const useStyles = makeStyles(theme => ({
  margin: {
    marginRight: theme.spacing(1),
  },
  icon: {
    color: '#FFF',
  },
  container: {
    alignSelf: 'flex-end',
    marginBottom: '2.5rem',
    marginLeft: '2rem',
  },
}));

const SearchTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#FFF',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FFF',
    },
    '& .MuiFormLabel-root': {
      color: '#FFF',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FFF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFF',
      },
    },
    '.MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 0,
    },
  },
})(TextField);

function InputTextField({ handleValueChanged, value }) {
  return <SearchTextField fullWidth id="filled-helperText" label="Search Name,State,City" onChange={handleValueChanged} value={value} />;
}

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const search = useSelector(state => state.searchReducer);
  const handleValueChanged = event => {
    dispatch(setSearch(event.target.value));
  };

  // const handleValueChanged = event => {
  //   dispatch(setSearch(event.target.value));
  // };

  // const keyPressHandler = event => {
  //   if (event.keyCode === 13) {
  //     dispatch(setSearch(''));
  //   }
  // };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <SearchIcon className={classes.icon} />
            </Grid>
            <Grid item>
              <InputTextField value={search} handleValueChanged={handleValueChanged} />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Search;
