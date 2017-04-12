import React from 'react';
import Test from './test.jsx';

const io = require('socket.io-client');
const socket = io();

class Container extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        socket.emit("getVideoList");
        socket.on("videoTitles", function(data){
            console.log(data);
        })
    }
    render() {
        return (
            <Test />
        )
    }
}

export default Container;