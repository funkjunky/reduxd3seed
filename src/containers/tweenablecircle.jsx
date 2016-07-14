import React from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';

let TweenableCircle = (posColor) => {
    //let {x, y, color, text} = posColor;
    let {xx, yy, color, text} = posColor;
    //let transformTranslation = 'translate(' + x + ', ' + y + ')';
    
    //TODO: I probably need to set a key for the Motion element
    return (
        <Motion style={posColor}>
            {({x, y}) =>
                <g transform={'translate(' + x + ', ' + y + ')'} className="commonFactorNode">
                    <circle fill={color} r={12} />
                    <text y="6" textAnchor="middle" fill="white">{text}</text>
                </g>
            }
        </Motion>
    );
};

TweenableCircle = connect()(TweenableCircle);

export default TweenableCircle;
