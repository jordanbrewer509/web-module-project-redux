import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index.js';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>,
  </Provider>,
  document.getElementById('root')
);
