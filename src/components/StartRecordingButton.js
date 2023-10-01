import React from 'react';

function StartRecordingButton({ onClick, recording }) {
  return (
    <button onClick={onClick} disabled={recording}>
      {recording ? 'Recording...' : 'Start Recording'}
    </button>
  );
}

export default StartRecordingButton;
