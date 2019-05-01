import React from 'react';
import PropTypes from 'prop-types';

import './Search.scss';

const Search = ({ value, changed }) => {
    return (
        <label className="Search">
            <i className="fas fa-search"></i>
            
            <input
                type="search"
                placeholder="Search movie..."
                value={value}
                onChange={changed} />
        </label>
    );
};

Search.propTypes = {
    value: PropTypes.string.isRequired,
    changed: PropTypes.func.isRequired
};

export default Search;