import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  margin: {
    marginRight: theme.spacing(1),
  },
  icon: {
    color: '#FFF',
  },
  container: {
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
    '& .MuiInputBase-input': {
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

const InputTextField = ({ handleValueChanged, value }) => {
  return <SearchTextField fullWidth id="filled-helperText" label="Search Name,State,City" onChange={handleValueChanged} value={value} />;
};

InputTextField.propTypes = {
  handleValueChanged: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const Search = ({ searchValueText, onValueChanged }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <SearchIcon className={classes.icon} />
            </Grid>
            <Grid item>
              <InputTextField value={searchValueText} handleValueChanged={onValueChanged} />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Search;

Search.propTypes = {
  searchValueText: PropTypes.string.isRequired,
  onValueChanged: PropTypes.func.isRequired,
};
