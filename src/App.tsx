import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styleguide/theme';

import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, numquam!</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
