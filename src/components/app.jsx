import React from 'react';
import AddProduct from '../containers/addproduct.jsx';
import DownloadProducts from '../containers/downloadproducts.jsx';
import ProductList from '../containers/productlist.jsx';
import Visualization from '../containers/visualization.jsx';

const App = () => (
    <div>
        <h1>Product Factors</h1>
        <AddProduct />
        <DownloadProducts />
        <ProductList />
        <Visualization />
    </div>
)

export default App;
