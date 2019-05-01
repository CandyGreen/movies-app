import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, isLoading, clicked }) => {
    return (
        <button
            className={ isLoading ? "Button Disabled" : "Button" }
            onClick={clicked}>
            {children}
        </button>
    );
};

Button.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    clicked: PropTypes.func.isRequired
};

export default Button;