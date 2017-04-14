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
        let context = this;
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
        let context = this;
        return(
        <div className="videoContainer" >
            <div className="row">
                {context.state.videos.map((video) => {
                    console.log(video.hero_image.hero_570x300);
                    return(
                        <VideoTile title={video.title} imageSource = {video.hero_image.hero_570x300} />
                    );
                })}
            </div>
        </div>
        );
    }
}

export default VideoContainer;