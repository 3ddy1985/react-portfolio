import React from 'react';
import PropTypes from 'prop-types';
import './color_mode.scss';

const ColorMode = ({onColorModeChange, colorMode}) => {
    const handleClick = () => {
        onColorModeChange(colorMode === 'dark' ? 'light' : 'dark');
    };

    const btnToggleClass = `color-mode__toggle--${colorMode}`;
    const btnSwitchClass = `color-mode__switch--${colorMode}`;

    return (
        <div className="color-mode">
            <button className={
                    `color-mode__switch ${btnSwitchClass}`
                }
                onClick={handleClick}
                aria-label="Switch color mode">
                <div id="btn-toggle"
                    className={
                        `color-mode__toggle ${btnToggleClass}`
                }></div>
            </button>
        </div>
    );
};

ColorMode.propTypes = {
    onColorModeChange: PropTypes.func.isRequired,
    colorMode: PropTypes.oneOf(
        ['dark', 'light']
    ).isRequired
};

export default ColorMode;
