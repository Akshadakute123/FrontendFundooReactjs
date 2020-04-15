import React, { Component } from 'react';
import Dashboard from './Dashboard';

class Maincomponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Dashboard data={this.props}></Dashboard>
                
            </div>
        );
    }
}

export default Maincomponent;
