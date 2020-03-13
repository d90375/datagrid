import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//   },
//   input: {
//     // backgroundColor: theme.palette.common.white,
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.common.white,
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     width: '100%',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     '&:focus': {
//       boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//       borderColor: theme.palette.primary.main,
//     },
//     '& input:valid + fieldset': {
//       borderColor: 'white',
//       borderWidth: 2,
//     },
//     '& input:invalid + fieldset': {
//       borderColor: 'white',
//       borderWidth: 2,
//     },
//     '& input:valid:focus + fieldset': {
//       borderLeftWidth: 10,
//       padding: '4px !important', // override inline-style
//     },
//   },
// }));

const useStyles = makeStyles(theme => ({
  margin: {
    marginRight: theme.spacing(1),
  },
  input: {},
  icon: {
    color: '#FFF',
  },
}));

const Search = ({ onSearch }) => {
  const [value, setValue] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
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

  return (
    <>
      <div className={classes.container}>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <SearchIcon className={classes.icon} />
            </Grid>
            <Grid item>
              <TextField
                className={classes.input}
                id="filled-helperText"
                label="Search Name,State,City"
                onKeyDown={keyPressHandler}
                onChange={valueChangeHandler}
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
