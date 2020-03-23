import React from 'react';

import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Header from './components/ui/Header';

import theme from './styles/theme';
import CustomTableContainer from './containers/Table/TableContainer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <CssBaseline />
        <Header />
        <main>
          <Paper elevation={4} style={{ paddingBottom: '10px' }}>
            <CustomTableContainer />
          </Paper>
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
