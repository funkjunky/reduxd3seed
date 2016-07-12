import {combineReducers} from 'redux';
import products from './reducers/products.jsx';

const reducersApp = combineReducers({
    products,
});

export default reducersApp;
