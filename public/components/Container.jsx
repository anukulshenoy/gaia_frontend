import React from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx'
import VideoContainer from './VideoContainer.jsx';

class Container extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="container">
                <Header />
                <Nav />
                <VideoContainer />
            </div>
        )
    }
}

export default Container;