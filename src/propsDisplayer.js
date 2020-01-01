import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
    render() {
        const stringProps = JSON.stringify(this.props);

        return (
            <div>
                <h1>CHECK OUT MY PROPS OBJECT</h1>
                <h2>{stringProps}</h2>
            </div>
        );
    }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp="Hello"/>, document.getElementById('app'));

/*
A React component should use `props` to store information that can be changed, but can only be changed by a different component.
A React component should use `state` to store information that the component itself can change.
 */
