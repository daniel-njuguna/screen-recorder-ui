// DOM elements
const videoList = document.getElementById('video-list');
const startRecordingButton = document.getElementById('start-recording-button');
const stopRecordingButton = document.getElementById('stop-recording-button');

let mediaRecorder;
let recordedChunks = [];
let stream;

// Function to start video recording
function startRecording() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((userStream) => {
      stream = userStream;
      mediaRecorder = new MediaRecorder(userStream);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const videoUrl = URL.createObjectURL(blob);

        const video = document.createElement('video');
        video.controls = true;
        video.src = videoUrl;

        const listItem = document.createElement('li');
        listItem.appendChild(video);

        videoList.appendChild(listItem);
        recordedChunks = [];
      };

      mediaRecorder.start();
    })
    .catch((error) => {
      console.error('Error accessing camera and microphone:', error);
    });
}

// Function to stop video recording
function stopRecording() {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
    stream.getTracks().forEach((track) => track.stop());
  }
}

// Event listeners for start and stop recording buttons
startRecordingButton.addEventListener('click', startRecording);
stopRecordingButton.addEventListener('click', stopRecording);
