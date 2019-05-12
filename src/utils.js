import React from 'react';

export const CalculateWinner = (squares) => {
    // Define an array of tictactoe square indexes for wins
    const lines = [
        [0, 1, 2], // indexes for across
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // indexes for down
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // indexes for diagonal
        [2, 4, 6],
    ];

    // Iterate through each win scenario
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }
    
    return null;
}
