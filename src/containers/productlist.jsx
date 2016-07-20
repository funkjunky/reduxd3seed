import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../actions.jsx';

//TODO: try without the class...
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    render() {
        return (
            <ul>
                {this.props.products.map((product) =>
                    <li key={product.id}><input type="text" value={product.product} onChange={e => this.props.dispatch(updateProduct(e.target.value, product.id))} /></li>
                )}
            </ul>
        );
    }
};

//TODO: products => products is sooooooo dumb. There should be a freaking default!!!!
ProductList = connect(({products}) => ({products}))(ProductList);

export default ProductList;
