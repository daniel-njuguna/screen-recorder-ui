import React from 'react';

function VideoToggle({ videoEnabled, onToggle }) {
  return (
    <div>
      <label>
        Enable Video Recording:
        <input
          type="checkbox"
          checked={videoEnabled}
          onChange={() => onToggle(!videoEnabled)}
        />
      </label>
    </div>
  );
}

export default VideoToggle;
