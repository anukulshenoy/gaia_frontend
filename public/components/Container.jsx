import React from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx'
import VideoContainer from './VideoContainer.jsx';
import Banner from './Banner.jsx';

class Container extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="container">
                <Header />
                <Nav />
                <Banner />
                <VideoContainer />
            </div>
        )
    }
}

export default Container;