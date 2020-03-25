import React from 'react';

import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Header from './components/ui/Header';

import theme from './styles/theme';
import TableLogicContainer from './containers/Table/TableContainer';

const App = ({ location }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <CssBaseline />
        <Header />
        <main>
          <Paper elevation={4} style={{ paddingBottom: '10px' }}>
            <TableLogicContainer searchRoute={location.search} />
          </Paper>
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default App;

App.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};
