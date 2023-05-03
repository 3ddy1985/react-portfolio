import React, { useState, useEffect } from 'react';
import './loading.scss';

const Loading = ({ colorMode }) => {
  const [load, setLoad] = useState(0);
  const [loadingCircleStyle, setLoadingCircleStyle] = useState({});

  useEffect(() => {
    const updateLoader = () => {
      setLoad((prevLoad) => {
        const newLoad = prevLoad < 100 ? prevLoad + 1 : prevLoad;
  
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
  }, [colorMode]);
  

  return (
    <div className="loading-box">
      <div className="loading-circle" style={loadingCircleStyle}>
        <p className="loading-count glowing-txt">
          <span>{load}</span><span className='faulty-letter'>%</span>
        </p>
      </div>
    </div>
  );
};

export default Loading;
