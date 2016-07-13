import React from 'react';
import { connect } from 'react-redux';
import d3 from 'd3';

import TweenableCircle from './tweenablecircle.jsx';

const colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
let getCommonFactors = (products) => products.reduce((carry, product, index) => {
        const color = colors[index];

        for(let i = 2; i <= (product.product / 2); ++i)
            for(let y = i; y <= (product.product / 2); ++y)
                if(i * y === +product.product)
                    carry.push({x: i, y: y, color: color, text: product.product});

        return carry;
}, []);

let Visualization = ({products}) => {
    let max = products.reduce((carry, product) => Math.max(product.product, carry), 0);

    let margin = {top: 20, right: 20, bottom: 30, left: 50};
    let width = 640 - margin.left - margin.right;
    let height = 640 - margin.top - margin.bottom;

    let x = d3.scale.linear().range([0, width]).domain([0, Math.ceil(Math.sqrt(max))]);
    let y = d3.scale.linear().range([height, 0]).domain([0, Math.floor(max / 2)]);

    //use the x and y translation functions to translate our values
    let translatedCircles = getCommonFactors(products).map((attr) => ({ ...attr, x: x(attr.x), y: y(attr.y)}));

    const graphTranslation = "translate(" + margin.left + ', ' + margin.top + ")";
    return (
        <svg width={width} height={height}>
            <g id="graph" transform={graphTranslation}>
                //TODO: Put in axes, as well as other containers of shapes here.
                <g id="circles">
                    {translatedCircles.map((attrs, index) =>
                        <TweenableCircle {...attrs} key={index} />
                    )}
                </g>
            </g>
        </svg>
    );
}

Visualization = connect(({products}) => ({products}))(Visualization);

export default Visualization;
