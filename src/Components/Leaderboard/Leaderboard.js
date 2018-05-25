import React, { Component } from 'react';
import moment from 'moment';
import Row from './Row';
import DynamicRow from './DynamicRow';

class Leaderboard extends Component {
    constructor(props) {
        super(props)
        
        this.convertTime = this.convertTime.bind(this);
    }
    convertTime(seconds) {
        return new Date(seconds * 1000).toISOString().substr(11, 8);
    }
    render() {
        return (
            <table className='Leaderboard'>
                <tbody>
                    {
                        this.props.data
                         ? this.props.data
                            .map((user) => {
                                const timeEnd = moment(user.timeEnd);
                                user.timeStart = moment(user.timeStart);
                                user.timeTotal = timeEnd.diff(user.timeStart, 'seconds');
                                return user;
                            })
                            .sort((a, b) => a.timeTotal - b.timeTotal)
                            .map((user, index) => (
                                user.timeEnd
                                    ?    <Row 
                                            name={user.name}
                                            timeTotal={this.convertTime(user.timeTotal)}
                                            timeStart={user.timeStart}
                                            timeEnd={user.timeEnd}
                                            key={index}
                                            rank={index + 1} 
                                        />
                                    :   <DynamicRow 
                                            name={user.name}
                                            timeTotal={user.timeTotal}
                                            convertTime={this.convertTime}
                                            key={index}
                                        />
                            ))
                         : null //TODO loading skeleton
                    }
                </tbody>
            </table>
        )
    }
}

export default Leaderboard;