import Nock from 'nock';
import Thunk from 'redux-thunk';
import MockStore from 'redux-mock-store'

import * as Types from '../src/constants/actiontypes.jsx';

let expect = require('chai').expect;

import { addProduct, updateProduct, downloadProducts } from '../src/actions.jsx';

var mockStore = MockStore([Thunk]);

describe('addProduct', () => {
    it('should produce addProduct action', () => {
        const product = 24;
        const expectedAction = {
            type: Types.ADD_PRODUCT,
            product,
        };
        expect(addProduct(product)).to.contain(expectedAction);
    });
});

describe('downloadProducts', () => {
    //TODO: when i replace with expect... well afterEach still exist? Looks like a global
    afterEach(() => Nock.cleanAll());

    it('should produce 3 addProduct actions', () => {
        Nock('http://localhost:3000')
            .get('/static/products.json')
            .reply(200, [140, 80, 340]);

        const expectedActions = [{
            type: Types.ADD_PRODUCT,
            product: 140,
        }, {
            type: Types.ADD_PRODUCT,
            product: 80,
        }, {
            type: Types.ADD_PRODUCT,
            product: 340,
        }];

        const store = mockStore();

        return store.dispatch(downloadProducts('products.json'))
            .then(() => {
                store.getActions().forEach((action, i) => expect(action).contains(expectedActions[i]));
            });
    });
});
