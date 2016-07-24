import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

import TweenableCircle from './tweenablecircle.jsx';

var CircleGraph = ({circles}) => (
    <ReactCSSTransitionGroup transitionName="example" component="g" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        {circles.map((attrs, index) =>
                <TweenableCircle {...attrs} key={index} />
        )}
    </ReactCSSTransitionGroup>
);

export default CircleGraph;
