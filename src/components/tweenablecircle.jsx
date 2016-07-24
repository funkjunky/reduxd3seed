import React from 'react';
import { Motion, spring } from 'react-motion';
import DirectedCircle from './directedcircle.jsx';

//the reassignment of properties is to spring the x, y.
let TweenableCircle = ({x, y, color, text}) => (
    <Motion style={{x: spring(x), y: spring(y)}}>
        {({x, y}) => <DirectedCircle {...{x, y, color, text}} />} 
    </Motion>
);

export default TweenableCircle;
