import React, { Component } from 'react';
import Loading from './Loading';

class Home extends Component {
    render() {
        document.title = 'SJB Resaurant'
        return (
            <div>
                <h1>This is Home</h1>
                <Loading/>
            </div>
        );
    }
}

export default Home;