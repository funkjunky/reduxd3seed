import React from 'react';


let TextedCircle = ({x, y, color, text}) => (
    <g transform={'translate(' + x + ', ' + y + ')'} className="commonFactorNode">
        <circle fill={color} r={12} />
        <text y="6" textAnchor="middle" fill="white">{text}</text>
    </g>
);

export default TextedCircle;
