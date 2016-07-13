import React from 'react';
import AddProduct from '../containers/addproduct.jsx';
import ProductList from '../containers/productlist.jsx';
import Visualization from '../containers/visualization.jsx';

const App = () => (
    <div>
        <AddProduct />
        <ProductList />
        <Visualization />
    </div>
)

export default App;
