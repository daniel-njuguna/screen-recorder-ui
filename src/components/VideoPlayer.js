import React from 'react';

function VideoPlayer({ videoUrl }) {
  return (
    <video src={videoUrl} controls>
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
