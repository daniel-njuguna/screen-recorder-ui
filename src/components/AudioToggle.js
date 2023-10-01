import React from 'react';

function AudioToggle({ audioEnabled, onToggle }) {
  return (
    <div>
      <label>
        Enable Audio Recording:
        <input
          type="checkbox"
          checked={audioEnabled}
          onChange={() => onToggle(!audioEnabled)}
        />
      </label>
    </div>
  );
}

export default AudioToggle;
