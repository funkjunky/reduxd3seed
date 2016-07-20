import React from 'react';
import { connect } from 'react-redux';
import d3 from 'd3';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

import TweenableCircle from './tweenablecircle.jsx';

const colors = ['aqua', 'gray', 'blue', 'fuchsia', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
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

    console.log('ticks: ', x.ticks().map(x));
    

    //use the x and y translation functions to translate our values
    let translatedCircles = getCommonFactors(products).map((attr) => ({ ...attr, x: x(attr.x), y: y(attr.y)}));

    const graphTranslation = "translate(" + margin.left + ', ' + margin.top + ")";
    return (
        <svg width={width} height={height}>
            <g id="graph" transform={graphTranslation}>
                <g id="axes">
                    <g id="xAxis">
                        <line x1="20" y1="540" x2={width} y2="540" style={{stroke:'black', strokeWidth:2}} />
                        <g id="xAxisTicks">
                            {x.ticks().slice(1).map((tick) => (
                                <g transform={'translate(' + x(tick) + ', ' + 560 + ')'} key={tick}> //TODO: figure out the 560. calculated. Same with 540s
                                    <line x1="0" y1="-15" x2="0" y2="-25" style={{stroke:'black', strokeWidth:2}} />
                                    <text textAnchor="middle">{tick}</text>
                                </g>
                            ))}
                        </g>
                    </g>
                    <g id="yAxis">
                        <line x1="20" y1="540" x2="20" y2="0" style={{stroke:'black', strokeWidth:2}} />
                        <g id="yAxisTicks">
                            {y.ticks().map((tick) => (
                                <g transform={'translate(0, ' + y(tick) + ')'} key={tick}>
                                    <line x1="15" y1="0" x2="25" y2="0" style={{stroke:'black', strokeWidth:2}} />
                                    <text textAnchor="middle">{tick}</text>
                                </g>
                            ))}
                        </g>
                    </g>
                </g>
                <g id="circles">
                    <ReactCSSTransitionGroup transitionName="example" component="g" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        {translatedCircles.map((attrs, index) =>
                                <TweenableCircle {...attrs} key={index} />
                        )}
                    </ReactCSSTransitionGroup>
                </g>
            </g>
        </svg>
    );
}

Visualization = connect(({products}) => ({products}))(Visualization);

export default Visualization;
