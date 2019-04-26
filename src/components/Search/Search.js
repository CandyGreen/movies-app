import React from 'react';

import './Search.scss';

const Search = props => {
    return (
        <label className="Search">
            <i className="fas fa-search"></i>
            
            <input
                type="search"
                placeholder="Search movie..."
                value={props.value}
                onChange={props.changed} />
        </label>
    );
};

export default Search;