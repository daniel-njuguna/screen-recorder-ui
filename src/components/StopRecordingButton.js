import React from 'react';

function StopRecordingButton({ onClick, recording }) {
  return (
    <button onClick={onClick} disabled={!recording}>
      Stop Recording
    </button>
  );
}

export default StopRecordingButton;
