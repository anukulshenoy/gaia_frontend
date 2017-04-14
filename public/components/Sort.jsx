import React from 'react';

const Sort = ({}) => {
    return (
        <div id="sort">
            <select id="select">
                <option value="recommended">Recommended</option>
                <option value="new">New</option>
                <option value="favorites">Favorites</option>
                <option value="rating">Rating</option>
            </select>
        </div>
    );
};


export default Sort