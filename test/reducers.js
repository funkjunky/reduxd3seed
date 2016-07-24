import * as Types from '../src/constants/ActionTypes';
import products from '../src/reducers/products.jsx';

let expect = require('chai').expect;

describe('products reducer', () => {
    it('should return an initial state', () => {
        expect(products(undefined, {})).to.deep.equal([]);
    });
    it('should add a new product', () => {
        expect(products(undefined, {
            type: Types.ADD_PRODUCT,
            product: 24,
        })[0]).to.have.property('product', 24);
    });
});
