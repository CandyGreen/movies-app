import React from 'react';

import './Button.scss';

const Button = props => {
    return (
        <button
            className={ props.isLoading ? "Button Disabled" : "Button" }
            onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default Button;