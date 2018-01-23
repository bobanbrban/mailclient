import React from 'react';
import ReactDOM from 'react-dom';
import { routerMain } from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(routerMain, document.getElementById('root'));
registerServiceWorker();
