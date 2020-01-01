import React from 'react';

export class Button extends React.Component {
    render() {
        return (
            /* the onClick handler method is passed as a prop from `randomColor.js` vvvv */
            <button
                className={ this.props.light ? 'light-button' : 'dark-button' } onClick={this.props.onClick}>
                Refresh
            </button>
        );
    }
}