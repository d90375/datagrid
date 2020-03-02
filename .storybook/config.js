import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { defaultTheme } from '../src/styleguide/theme';

const history = createBrowserHistory();

addDecorator(story => (
    <ThemeProvider theme={defaultTheme}>
        <Router history={history}>{story()}</Router>
    </ThemeProvider>
));

const req = require.context('../src/styleguide', true, /\.stories\.tsx$/);
function loadStories() {
    req.keys().forEach(req);
    console.log(req.keys())
}

configure(loadStories, module);