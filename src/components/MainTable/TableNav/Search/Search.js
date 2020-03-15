import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

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

const Search = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const classes = useStyles();

  const valueChangeHandler = event => {
    setValue(event.target.value);
  };

  const keyPressHandler = event => {
    if (event.keyCode === 13) {
      setValue(event.target.value);
      onSearch(value);
    }
  };

  const inputProps = {
    color: '#FFF',
  };
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
    },
  })(TextField);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <SearchIcon className={classes.icon} />
            </Grid>
            <Grid item>
              <SearchTextField
                className={classes.input}
                id="filled-helperText"
                label="Search Name,State,City"
                onKeyDown={keyPressHandler}
                onChange={valueChangeHandler}
                inputProps={inputProps}
                value={value}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Search;
