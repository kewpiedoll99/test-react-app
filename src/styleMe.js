import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
    background: 'lightblue',
    color: 'darkred',
    marginTop: "20px",
    backgroundColor: "green"
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
    styleMe,
    document.getElementById('app')
);


/*
If you see double curly braces (e.g., `<h1 style={{background: 'lightblue', color: 'darkred'}}>TK</h1>`):
The outer curly braces inject JavaScript into JSX. They say, “everything between us should be read as JavaScript, not JSX.”
The inner curly braces create a JavaScript object literal.
If you have a variable defining the styles object as above then you only need a single outer curly braces plus the varname.

In regular JavaScript, style names are written in hyphenated-lowercase. In React, those same names are instead written
in camelCase. This has zero effect on style property values, only on style property names.

Property values: In regular JS, style values are almost always strings. In React, if you write a style value as a number,
then the unit "px" is assumed (e.g., `{ fontSize: 30 }`. If you want to use units other than "px" you can use a string
(e.g., `{ fontSize: "2em" }`. HERE IS A LIST OF STYLES THAT DON'T ASSUME "px": https://reactjs.org/docs/dom-elements.html
 */
