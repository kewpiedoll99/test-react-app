import React from 'react';
import { Board } from './Board';

export class Game extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <div className="game">
                    <br/>
                    <div className="game-board">
                        <Board />
                    </div>
                    <div className="game-info">
                        <div>{/* status */}</div>
                        <ol>{/* TODO */}</ol>
                    </div>
                </div>
            </div>
        );
    }
}
