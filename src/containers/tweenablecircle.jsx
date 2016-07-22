import React from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';

let TweenableCircle = (posColor) => {
    let {x, y, color, text} = posColor;
    //let transformTranslation = 'translate(' + x + ', ' + y + ')';
    
    //TODO: I probably need to set a key for the Motion element
    return (
        <Motion style={{x: spring(x), y: spring(y)}}>
            {({x, y}) =>
                <g>
                    <line x1={x} y1={y} x2={x} y2="590" style={{stroke: color, strokeWidth:1}} /> //TODO: 590... fuck the flipped plane
                    <line x1="0" y1={y} x2={x} y2={y} style={{stroke: color, strokeWidth:1}} />
                    <g transform={'translate(' + x + ', ' + y + ')'} className="commonFactorNode">
                        <circle fill={color} r={12} />
                        <text y="6" textAnchor="middle" fill="white">{text}</text>
                    </g>
                </g>
            }
        </Motion>
    );
};

TweenableCircle = connect()(TweenableCircle);

export default TweenableCircle;
