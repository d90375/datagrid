import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Search = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const valueChangeHandler = event => {
    setValue(event.target.value);
  };

  // const keyPressHandler = event => {
  //   if (event.key === 'Enter') {
  //     console.log('Enter key pressed');
  //   }
  // };

  return (
    <>
      <div className="input-group mb-3 mt-3">
        <div className="input-group-prepend">
          <Button onClick={() => onSearch(value)} component="span" variant="outlined">
            Search
          </Button>
        </div>
        <TextField
          id="filled-helperText"
          label="Search field"
          defaultValue="Default Value"
          variant="outlined"
          onChange={valueChangeHandler}
          value={value}
        />
      </div>
    </>
  );
};

export default Search;
