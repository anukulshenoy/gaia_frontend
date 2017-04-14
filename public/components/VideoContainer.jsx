import React from 'react';
import VideoTile from './VideoTile.jsx';

const io = require('socket.io-client');
const socket = io();

class VideoContainer extends React.Component {
    constructor () {
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
        var context = this;
        return(
        <div className="videoContainer" >
            <div className="row">
            <VideoTile />
            <VideoTile />
            <VideoTile />
            <VideoTile />
            <VideoTile />
            <VideoTile />
            <VideoTile />
            <VideoTile />
            <VideoTile />
            <VideoTile />

            </div>
        </div>
        );
    }
}

export default VideoContainer;