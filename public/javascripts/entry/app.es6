
// Loading Styles
import '../../stylesheets/style.less';

// React Dependencies
import React from 'react';
import { render } from 'react-dom';

// Redux Dependencies
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Redux Middleware
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

// App Components
import Paduler from '../components/paduler.jsx';

// Redux Components
import reducers from '../reducers/padulerReducers.es6';

let createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);
let store = createStoreWithMiddleware(reducers);
let rootElement = document.getElementById('paduler');

render(<Provider store={store}>
	<Paduler />
</Provider>, rootElement);