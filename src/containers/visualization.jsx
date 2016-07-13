import React from 'react';
import { connect } from 'react-redux';
import ReactFauxDom from 'react-faux-dom'; 
import d3 from 'd3';

let Visualization = ({products}) => {
    const colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
    let max = products.reduce((carry, product) => Math.max(product.product, carry), 0);

    //TODO: this needs to be moved to a reducer for sure//
    let commonFactors = products.reduce((carry, product, index) => {
        const color = colors[index];

        for(let i = 2; i <= (product.product / 2); ++i)
            for(let y = i; y <= (product.product / 2); ++y)
                if(i * y === +product.product)
                    carry.push({x: i, y: y, color: color});

        return carry;
    }, []);
    ////////

    let margin = {top: 20, right: 20, bottom: 30, left: 50}
    let width = 640 - margin.left - margin.right
    let height = 640 - margin.top - margin.bottom

    let x = d3.scale.linear().range([0, width]).domain([0, Math.ceil(Math.sqrt(max))]);
    let y = d3.scale.linear().range([height, 0]).domain([0, Math.floor(max / 2)]);

    let xAxis = d3.svg.axis().scale(x).orient('bottom');
    let yAxis = d3.svg.axis().scale(y).orient('left');

    let node = ReactFauxDom.createElement('svg');
    let svg = d3.select(node)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top+ ')');

    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);

    svg.append('g')
        .attr('class', 'y axis')
        .call(yAxis);

    let rootContainer = svg
        .append('g');

    let containers = rootContainer
        .selectAll('g')
        .data(commonFactors)
        .enter()
        .append('g');


    containers
            .attr('transform', (product) => 'translate(' + x(product.x) + ',' + y(product.y) + ')');

    containers.append('circle')
        .attr('r', 12)
        .attr('fill', (product) => product.color);

    containers.append('text')
        .text((product) => product.x * product.y)
        .attr('y', 6)
        .attr('textAnchor', 'middle')
        .attr('fill', 'white');

    return node.toReact();
}

Visualization = connect(({products}) => ({products}))(Visualization);

export default Visualization;
