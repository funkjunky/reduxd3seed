import TestUtils from 'react-addons-test-utils'
import React from 'react';

import App from '../src/components/app.jsx';
import CircleGraph from '../src/components/circlegraph.jsx';
import TweenableCircle from '../src/components/tweenablecircle.jsx';
import DirectedCircle from '../src/components/DirectedCircle.jsx';
import TextedCircle from '../src/components/TextedCircle.jsx';

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

describe('CircleGraph component', () => {
    let circles = [
        {x: 1, y: 1, text: '1', color: 'red'},
        {x: 2, y: 2, text: '4', color: 'red'},
    ];

    let renderer = TestUtils.createRenderer();
    renderer.render(<CircleGraph circles={circles} />);
    let output = renderer.getRenderOutput();

    it('should contain tweenablecircles', () => {
        expect(output.props.children.length).to.equal(2);
    });

    it('should pass x and y to TweenableCircles', () => {
        output.props.children.forEach((tweenableCircle) => {
            expect(tweenableCircle.type).to.equal(TweenableCircle);
            expect(tweenableCircle.props).to.have.property('x');
            expect(tweenableCircle.props).to.have.property('y');
        });
    });
});

describe('DirectedCircle component', () => {
    let circle = {x: 1, y: 1, text: '1', color: 'red'};

    let renderer = TestUtils.createRenderer();
    renderer.render(<DirectedCircle {...circle} />);
    let output = renderer.getRenderOutput();

    it('should contain two lines', () => {
        expect(output.props.children.filter((element) => element.type === 'line').length).to.equal(2);
    });

    it('should contain a circle with x and y', () => {
        console.log('fourth: ', output.props.children[3].type, TextedCircle, output.props.children[3].type == TextedCircle);
        var circles = output.props.children.filter((element) => element.type == TextedCircle);
        expect(circles.length).to.equal(1);
        expect(circles[0].props).to.have.property('x', circle.x);
        expect(circles[0].props).to.have.property('y', circle.y);
    });
});

describe('TextedCircle component', () => {
    let circle = {x: 1, y: 1, color: 'red'};

    let renderer = TestUtils.createRenderer();
    renderer.render(<TextedCircle {...circle} />);
    let output = renderer.getRenderOutput();

    let circles = output.props.children.filter((element) => element.type == 'circle');
    let texts = output.props.children.filter((element) => element.type == 'text');
    it('should contain a circle and text element', () => {
        expect(circles.length).to.equal(1);
        expect(texts.length).to.equal(1);
    });
    it('should contain the correct text in text element', () => expect(texts[0].props.children).to.equal(circle.text));
});
