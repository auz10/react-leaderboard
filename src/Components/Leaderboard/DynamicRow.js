import React, { Component } from 'react';

class DynamicRow extends Component {
    constructor(props) {
        super(props);
        this.state = { time: this.props.timeTotal };
        
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ 
                time: this.state.time += 1
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        const { name } = this.props;
        return (
            <tr className='Leaderboard__row'>
                <td>-</td>
                <td>{name}</td>
                <td>{this.props.convertTime(this.state.time)}</td>
            </tr>
        )
    }
}

export default DynamicRow;