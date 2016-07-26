import TestUtils from 'react-addons-test-utils'
import { shallow } from 'enzyme';
import React from 'react';

import App from '../src/components/app.jsx';
import CircleGraph from '../src/components/circlegraph.jsx';
import TweenableCircle from '../src/components/tweenablecircle.jsx';
import DirectedCircle from '../src/components/DirectedCircle.jsx';
import TextedCircle from '../src/components/TextedCircle.jsx';

let expect = require('chai').expect;

describe('App component', () => {
    it('Should contain an important header that the client must always have.', () => {
        let app = shallow(<App />);
        expect(app.find('h1').text()).to.equal('Product Factors');
    });
});

describe('CircleGraph component', () => {
    let circles = [
        {x: 1, y: 1, text: '1', color: 'red'},
        {x: 2, y: 2, text: '4', color: 'red'},
    ];

    let circleGraph = shallow(<CircleGraph circles={circles} />);

    it('should contain tweenablecircles', () => {
        expect(circleGraph.find('TweenableCircle').length).to.equal(2);
    });

    it('should pass x and y to TweenableCircles', () => {
        circleGraph.find('TweenableCircles').forEach((tweenableCircle) => {
            expect(tweenableCircle.type).to.equal(TweenableCircle);
            expect(tweenableCircle.props()).to.have.property('x');
            expect(tweenableCircle.props()).to.have.property('y');
        });
    });
});

describe('DirectedCircle component', () => {
    let circle = {x: 1, y: 1, text: '1', color: 'red'};

    let directedCircle = shallow(<DirectedCircle {...circle} />);

    it('should contain two lines', () => {
        expect(directedCircle.find('line').length).to.equal(2);
    });

    it('should contain a circle with x and y', () => {
        let textedCircle = directedCircle.find('TextedCircle');
        expect(textedCircle.length).to.equal(1);
        expect(textedCircle.props()).to.have.property('x', circle.x);
        expect(textedCircle.props()).to.have.property('y', circle.y);
    });
});

describe('TextedCircle component', () => {
    let circle = {x: 1, y: 1, text: '1', color: 'red'};

    var textedCircle = shallow(<TextedCircle {...circle} />);

    it('should contain a circle and text element', () => {
        expect(textedCircle.find('circle').length).to.equal(1);
        expect(textedCircle.find('text').length).to.equal(1);
    });
    it('should contain the correct text in text element', () => expect(textedCircle.find('text').text()).to.equal(circle.text));
});
