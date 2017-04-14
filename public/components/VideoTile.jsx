import React from 'react';

class VideoTile extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        return(
        <div className="videoTile">
            <img className = "videoImg" src={this.props.imageSource}/>
            <i className="playbutton fa fa-play fa-lg" aria-hidden="true"></i>
        </div>
        );
    }
}

export default VideoTile;
