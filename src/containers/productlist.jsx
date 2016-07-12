import React from 'react';
import { connect } from 'react-redux';

let ProductList = ({ products }) => (
    <ul>
        {products.map(product =>
            <li key={product.id}>{product.product}</li>
        )}
    </ul>
);

//TODO: products => products is sooooooo dumb. There should be a freaking default!!!!
ProductList = connect(({products}) => ({products}))(ProductList);

export default ProductList;
