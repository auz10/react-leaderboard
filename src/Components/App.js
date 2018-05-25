import React, { Component } from 'react';
import axios from 'axios';
import Leaderboard from './Leaderboard/Leaderboard';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount() {
        this.fetchData();
        setInterval(this.fetchData, 30000);
    }
    fetchData() {
        axios.get('http://private-3ba44-walktimes.apiary-mock.com/walktimes')
            .then((resp) => {
                this.setState({data: resp.data.walkers})
            });
    }
    render() {
        return (
            <Leaderboard data={this.state.data}/>
        )
    }
}

export default App;