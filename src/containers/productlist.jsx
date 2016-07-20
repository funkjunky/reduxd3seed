import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../actions.jsx';
import productsReducer from '../reducers/products.jsx';

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
/*
    dispatch(action) {
        //this.props.dispatch(action);
        this.setState({...this.state, products: productsReducer(this.state.products, action)});
    }
*/
};

//TODO: products => products is sooooooo dumb. There should be a freaking default!!!!
ProductList = connect(({products}) => ({products}))(ProductList);

export default ProductList;
