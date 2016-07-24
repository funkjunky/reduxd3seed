import fetch from 'isomorphic-fetch';
import * as Types from './constants/actiontypes.jsx';
//TODO: encapsulate the id incrementer
let nextProductId = 0;

export const addProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        id: ++nextProductId,
        product,
    };
}

export const updateProduct = (product, index) => {
    return {
        type: Types.UPDATE_PRODUCT,
        id: index,
        product,
    };
}

export function downloadProducts(filename) {
    return dispatch => 
        fetch('http://localhost:3000/static/products.json')
            .then(response => response.json())
            .then(products => products.forEach((product, index) => dispatch(addProduct(product))));
            //TODO: I need to offset the setTimeout out of this function so I can test it properly. I think using debounce somehow...
            //.then(products => products.forEach((product, index) => setTimeout(() => dispatch(addProduct(product)), 500 * index)));
}
