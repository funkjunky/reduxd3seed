let expect = require('chai').expect;
import { addProduct, updateProduct } from '../src/actions.jsx';

describe('addProduct', () => {
    it('should produce correct action', () => {
        const product = 24;
        const expectedAction = {
            type: 'ADD_PRODUCT',
            product,
        };
        expect(addProduct(product)).to.contain(expectedAction);
    });
});
