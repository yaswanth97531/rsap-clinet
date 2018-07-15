import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter from './routes';

import 'antd/dist/antd.css';
import store from "./redux/store";
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
