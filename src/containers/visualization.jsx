import React from 'react';
import { connect } from 'react-redux';
import d3 from 'd3';

import CircleGraph from '../components/circlegraph.jsx';
import getCommonFactors from '../helpers/getcommonfactors.jsx';
import { colorsArray } from '../constants/colorsarray.jsx';

let Visualization = ({products}) => {
    let max = products.reduce((carry, product) => Math.max(product.product, carry), 0);

    let margin = {top: 20, right: 20, bottom: 30, left: 50};
    let width = 640 - margin.left - margin.right;
    let height = 640 - margin.top - margin.bottom;

    let xScale = d3.scale.linear().range([0, width]).domain([0, Math.ceil(Math.sqrt(max)) + 1]);
    let yScale = d3.scale.linear().range([height, 0]).domain([0, Math.floor(max / 1.8) + 1]); //TODO: I don't know why i can't simply do /2

    //use the x and y translation functions to translate our values
    let translatedCircles = products.reduce(
        //concat all factors for all products
        (coll, product, index) =>   coll.concat(getCommonFactors(product.product)
                                        //map factors to graph space, with a color and text, as an object to send to DirectedCircle
                                        .map(({x, y}) => ({x: xScale(x), y: yScale(y), color: colorsArray[index], text: product.product})))
    , []);

    const graphTranslation = "translate(" + margin.left + ', ' + -margin.bottom + ")";
    return (
        <svg width={width} height={height}>  //TODO: this may not be necessary... if i omit it nothing changes...
            <g id="graph" transform={graphTranslation}>
                <g id="xAxis">
                    <line x1="0" y1={height} x2={width} y2={height} style={{stroke:'black', strokeWidth:2}} />
                    <g id="xAxisTicks">
                        {xScale.ticks().slice(1).map((tick) => (
                            <g transform={'translate(' + xScale(tick) + ', ' + height + ')'} key={tick}> //TODO: figure out the 560. calculated. Same with 540s
                                <line x1="0" y1="5" x2="0" y2="-5" style={{stroke:'black', strokeWidth:2}} />
                                <text textAnchor="middle" y="20">{tick}</text>
                            </g>
                        ))}
                    </g>
                </g>
                <g id="yAxis">
                    <line x1="0" y1={height} x2="0" y2="0" style={{stroke:'black', strokeWidth:2}} />
                    <g id="yAxisTicks">
                        {yScale.ticks().slice(1).map((tick) => (
                            <g transform={'translate(0, ' + yScale(tick) + ')'} key={tick}>
                                <line x1="-5" y1="0" x2="5" y2="0" style={{stroke:'black', strokeWidth:2}} />
                                <text textAnchor="middle" x="-20">{tick}</text>
                            </g>
                        ))}
                    </g>
                </g>
                <CircleGraph circles={translatedCircles} />
            </g>
        </svg>
    );
}

Visualization = connect(({products}) => ({products}))(Visualization);

export default Visualization;
