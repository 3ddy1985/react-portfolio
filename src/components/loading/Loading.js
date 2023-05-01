import React, { useState, useEffect } from 'react';
import './loading.scss';

const Loading = () => {
  const [load, setLoad] = useState(0);
  const [loadingCircleStyle, setLoadingCircleStyle] = useState({});

  useEffect(() => {
    const updateLoader = () => {
      setLoad((prevLoad) => {
        const newLoad = prevLoad < 100 ? prevLoad + 1 : prevLoad;
        setLoadingCircleStyle({
            background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 105, 180, 1) 0%, rgba(255, 105, 180, 1) ${newLoad}%, #101012 ${newLoad}%)`,
        });
        return newLoad;
      });
    };

    const interval = setInterval(updateLoader, 70);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="loading-box">
      <div className="loading-circle" style={loadingCircleStyle}>
        <p className="loading-count">
          <span>{load}</span>%
        </p>
      </div>
    </div>
  );
};

export default Loading;
