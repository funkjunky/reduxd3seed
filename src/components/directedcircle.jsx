import React from 'react';

import TextedCircle from './textedcircle.jsx';

let DirectedCircle = ({x, y, color, text}) => (
    <g>
        <line x1={x} y1={y} x2={x} y2="590" style={{stroke: color, strokeWidth:1}} /> //TODO: 590... fuck the flipped plane
        <line x1="0" y1={y} x2={x} y2={y} style={{stroke: color, strokeWidth:1}} />
        <TextedCircle {...{x, y, color, text}} />
    </g>
);

export default DirectedCircle;
