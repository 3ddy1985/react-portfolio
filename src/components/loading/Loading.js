import React, { useState, useEffect } from 'react';
import './loading.scss';

const Loading = ({ colorMode }) => {
  const [load, setLoad] = useState(0);
  const [loadingCircleStyle, setLoadingCircleStyle] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const updateLoader = () => {
      setLoad((prevLoad) => {
        let newLoad = prevLoad;
  
        if (prevLoad < 100) {
          newLoad = prevLoad + 1;
        } else if (!isLoaded) {
          setIsLoaded(true);
        }
        const colors = colorMode === 'dark' ? {
          primary: 'rgb(255,85,170)',
          secondary: 'rgb(255,7,131)',
          background: '#121212',
        } : {
          primary: 'rgb(5,59,253)',
          secondary: 'rgb(2,52,231)',
          background: '#ffffff',
        };
  
        setLoadingCircleStyle({
          background: `conic-gradient(from 0deg at 50% 50%, ${colors.primary} 0%, ${colors.secondary} ${newLoad}%, ${colors.background} ${newLoad}%)`,
        });
  
        return newLoad;
      });
    };
  
    const interval = setInterval(updateLoader, 70);

  return () => {
    clearInterval(interval);
  };
}, [colorMode, isLoaded]);

// Conditionally apply the spinning animation to the text
let loadingCountClass = 'loading-count';
if (!isLoaded) {
  loadingCountClass += ' spin';
}

return (
  <div className="loading-box">
    <div className="loading-circle" style={loadingCircleStyle}>
      <p className={loadingCountClass} >
        <span>{load}</span><span className='faulty-letter'>%</span>
      </p>
    </div>
  </div>
);
};

export default Loading;
