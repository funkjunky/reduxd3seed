import React from 'react';
import { connect } from 'react-redux';

let TweenableCircle = (posColor) => {
    let {x, y, color, text} = posColor;
    let transformTranslation = 'translate(' + x + ', ' + y + ')';
    console.log('text: ', text);
    
    //TODO: I probably need to set a key for the Motion element
    return (
        //<Motion style={posColor}>
        //    {({x, y, color}) =>
            <g transform={transformTranslation} className="commonFactorNode">
                <circle fill={color} r={12} />
                <text y="6" textAnchor="middle" fill="white">{text}</text>
            </g>
        //</Motion>
    );
};

TweenableCircle = connect()(TweenableCircle);

export default TweenableCircle;
