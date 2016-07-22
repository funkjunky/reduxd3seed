import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import promise from 'redux-promise';

import reducers from './reducers.jsx';
import App from './components/app.jsx';

import dataProducts from '../json/products.json';
import { addProduct } from './actions.jsx';

let loggerMiddleware = createLogger();

let store = createStore(reducers, applyMiddleware(
    thunkMiddleware,
    //loggerMiddleware,
));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

//imports products from json [our database] and insert them once every half a second.
dataProducts.forEach((product, index) => setTimeout(() => store.dispatch(addProduct(product)), 500 * index));
