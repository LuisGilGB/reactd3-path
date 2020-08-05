import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import DemoApp from './DemoApp';
import * as serviceWorker from './serviceWorker';
import './index.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DemoApp />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
