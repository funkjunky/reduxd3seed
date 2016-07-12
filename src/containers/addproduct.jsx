import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions.jsx';

let AddProduct = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(addProduct(input.value));
                input.value = '';
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

AddProduct = connect()(AddProduct);

export default AddProduct;
