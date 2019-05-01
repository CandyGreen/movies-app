import React from 'react';
import PropTypes from 'prop-types';

import Search from '../Search/Search';
import Button from '../Button/Button';
import './Toolbar.scss';

const Toolbar = ({ search, changed, isLoading, clicked }) => {
    return (
        <div className="Toolbar">
            <div className="Container">
                <Search
                    value={search}
                    changed={changed} />

                <Button
                    isLoading={ isLoading || search === '' }
                    clicked={clicked}>
                    { isLoading ? 'Searching' : 'Search' }
                </Button>
            </div>
        </div>
    );
};

Toolbar.propTypes = {
    search: PropTypes.string.isRequired,
    changed: PropTypes.func.isRequired,
    clicked: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Toolbar;