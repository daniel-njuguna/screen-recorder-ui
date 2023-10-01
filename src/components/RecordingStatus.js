import React from 'react';

function RecordingStatus({ recording }) {
  return (
    <div>
      {recording ? <p>Recording...</p> : <p>Idle</p>}
    </div>
  );
}

export default RecordingStatus;
