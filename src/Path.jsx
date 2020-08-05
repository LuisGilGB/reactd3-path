import React from 'react';
import './Path.css';

const DEFAULT_CLASS_NAME = 'reactd3-path';

const Path = props => {
    const {
        children,
        className = '',
        style,
        onClick,
        ...otherProps
    } = props;

    return (
        <div
            {...otherProps}
            className={`${DEFAULT_CLASS_NAME} ${className}`.trim()}
            style={style}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Path;