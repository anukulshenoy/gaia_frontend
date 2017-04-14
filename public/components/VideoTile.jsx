import React from 'react';

class VideoTile extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        return(
        <div className="videoTile">
            <img className = "videoImg" src="https://s-media-cache-ak0.pinimg.com/originals/2e/21/4e/2e214e641d43e51f71a3b2737f781e92.jpg"/>
            <i className="playbutton fa fa-play fa-lg" aria-hidden="true"></i>
        </div>
        );
    }
}

export default VideoTile;
