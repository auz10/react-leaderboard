import React from 'react';

function Row(props) {
    const { name, timeTotal, rank } = props;
    return (
        <tr className='Leaderboard__row'>
            <td>{rank}</td>
            <td>{name}</td>
            <td>{timeTotal}</td>
        </tr>
    )
}

export default Row;