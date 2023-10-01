import React from 'react';

function Feature({ title, description }) {
  return (
    <div className="feature">
      <div className="highlight-icon">
        {/* Add your feature icon here */}
      </div>
      <div className="highlight-text">
        <b>{title}</b>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Feature;
