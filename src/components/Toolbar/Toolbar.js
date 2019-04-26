import React from 'react';

import Search from '../Search/Search';
import Button from '../Button/Button';
import './Toolbar.scss';

const Toolbar = props => {
    return (
        <div className="Toolbar">
            <div className="Container">
                <Search
                    value={props.search}
                    changed={props.changed} />

                <Button
                    isLoading={ props.isLoading || props.search === '' }
                    clicked={props.clicked}
                    >
                    { props.isLoading ? 'Searching' : 'Search' }
                </Button>
            </div>
        </div>
    );
};

export default Toolbar;