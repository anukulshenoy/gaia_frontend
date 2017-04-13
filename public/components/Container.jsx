import React from 'react';

const io = require('socket.io-client');
const socket = io();

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: []
        }
    }

    componentWillMount() {
        var context = this;
        socket.emit("getVideoList");
        socket.on("videoTitles", function(data){
            context.setState({
                videos: data
            }, function(){
                console.log(context.state.videos);
            })
        })
    }
    render() {
        return(
            <div>Hi</div>
        )
    }
}

export default Container;