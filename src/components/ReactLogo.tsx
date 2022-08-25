import React from 'react';
import reactLogo from '../logo.svg';

const ReactLogo = () => {
  return (
    <img
      src={reactLogo}
      alt="reactLogo"
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        width: 130,
      }}
    />
  );
};

export default ReactLogo;
