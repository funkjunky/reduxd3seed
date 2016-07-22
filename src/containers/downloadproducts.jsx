import React from 'react';
import { connect } from 'react-redux';
import { downloadProducts } from '../actions.jsx';
import fetch from 'isomorphic-fetch';

let DownloadProducts = ({ dispatch }) => (
        <div>
            <button type="button" onClick={() => dispatch(downloadProducts('/static/products.json'))}>download products</button>
        </div>
);

DownloadProducts = connect()(DownloadProducts);

export default DownloadProducts;
