import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App.jsx';
import { css } from 'aphrodite';
import common from './styles/common';

document.body.className = css(common.app);
ReactDOM.render(<App />, document.getElementById('app'));

module.hot && module.hot.accept();
