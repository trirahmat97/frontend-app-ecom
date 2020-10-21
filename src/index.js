import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";

import { Provider } from 'react-redux';
import confStore from './store/confStore';
const store = confStore();
const jsx = <Provider store={store}><App /></Provider>

ReactDOM.render(jsx, document.querySelector('#root'));