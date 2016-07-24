import TestUtils from 'react-addons-test-utils'
import React from 'react';

import App from '../src/components/app.jsx';

let expect = require('chai').expect;

describe('App component', () => {
    it('Should contain an important header that the client must always have.', () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(<App />);
        let output = renderer.getRenderOutput();

        let [ h1 ] = output.props.children;
        expect(h1.props.children).to.equal('Product Factors');
    });
});
