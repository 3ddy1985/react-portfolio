import React from 'react';
import './color_mode.scss';

const Color_mode = ({ onColorModeChange, colorMode }) => {
  const handleClick = () => {
    onColorModeChange(colorMode === 'dark' ? 'light' : 'dark');
  };

  const btnClass = colorMode === 'dark' ? 'off' : 'on';

  return (
    <div className="color-mode">
      <button className="mode-switch" onClick={handleClick}>
        <div id="btn-toggle" className={btnClass}></div>
      </button>
    </div>
  );
};

export default Color_mode;
