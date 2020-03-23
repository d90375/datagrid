import React from 'react';
import Button from '@material-ui/core/Button';
import ImportExportIcon from '@material-ui/icons/ImportExport';

const QueryString = () => {
  return (
    <>
      <Button style={{ marginRight: '.5rem' }} variant="outlined" color="secondary" startIcon={<ImportExportIcon />}>
        Query
      </Button>
    </>
  );
};

export default QueryString;
