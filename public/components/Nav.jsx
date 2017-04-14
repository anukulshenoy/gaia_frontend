import React from 'react';


const Nav = ({}) => {
    return (
            <div className="navbar">
                <a href="#profile" className="navItem">My Gaia</a>
                <a href="#yoga" className="navItem">Yoga</a>
                <a href="#seekingtruth" className="navItem">Seeking Truth</a>
                <a href="#transformation" className="navItem">Transformation</a>
                <a href="#films" className="navItem">Films and Docs</a>
                <a href="#centers" className="navItem">Centers</a>
                <div className="search">
                    <input type="search" placeholder="search..." />
                </div>
            </div>
    );
};


export default Nav
