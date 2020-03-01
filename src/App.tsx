// import React from 'react';
// import styled from 'styled-components';
// import theme from 'styled-theming';
// import { ColorsKeys } from '../static/theme';
//
// const backgroundColor = theme.variants('mode', 'variant', {
//   default: { light: 'gray', dark: 'darkgray' },
//   primary: { light: 'blue', dark: 'darkblue' },
//   success: { light: 'green', dark: 'darkgreen' },
//   warning: { light: 'orange', dark: 'darkorange' },
// });
//
// const Button = styled.div<any>`
//   width: 100px;
//   height: 100px;
//   background-color: ${backgroundColor};
// `;
//
// const App = () => {
//   return (
//     <div>
//       <Button variant="default" />
//       <Button variant="primary" />
//       <Button variant="success" />
//       <Button variant="warning" />
//     </div>
//   );
// };
//
// export default App;

import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

addDecorator(story => (
    <ThemeProvider theme={{}}>
        <Router history={history}>{story()}</Router>
    </ThemeProvider>
));

configure(require.context('../src', true, /\.stories\.tsx$/), module);
