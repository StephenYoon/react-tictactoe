import React from 'react';

/* 
In React, function components are a simpler way to write components that only contain 
a render method and don’t have their own state. Instead of defining a class which 
extends React.Component, we can write a function that takes props as input 
and returns what should be rendered. 
Function components are less tedious to write than classes, and many components can be expressed this way.
 */
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
        {props.value}
        </button>
    );
}

export default Square;