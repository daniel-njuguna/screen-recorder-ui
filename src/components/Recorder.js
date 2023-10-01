import React, { Component } from 'react';

class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      videoUrl: null,
    };
    this.mediaRecorder = null;
    this.chunks = [];
  }

  startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: { mediaSource: 'screen' } });
      this.mediaRecorder = new MediaRecorder(stream);

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.chunks.push(event.data);
        }
      };

      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.chunks, { type: 'video/webm' });
        const videoUrl = URL.createObjectURL(blob);
        this.setState({ videoUrl });
      };

      this.mediaRecorder.start();
      this.setState({ recording: true });
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  stopRecording = () => {
    if (this.mediaRecorder) {
      this.mediaRecorder.stop();
      this.setState({ recording: false });
    }
  };

  render() {
    const { recording, videoUrl } = this.state;

    return (
      <div>
        <button onClick={recording ? this.stopRecording : this.startRecording}>
          {recording ? 'Stop Recording' : 'Start Recording'}
        </button>
        {videoUrl && <video src={videoUrl} controls />}
      </div>
    );
  }
}

export default Recorder;
