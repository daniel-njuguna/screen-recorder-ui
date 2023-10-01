import React, { useState } from 'react';
import './App.css';
import StartRecordingButton from './components/StartRecordingButton';
import StopRecordingButton from './components/StopRecordingButton';
import VideoPlayer from './components/VideoPlayer';
import RecordingStatus from './components/RecordingStatus';
import AudioToggle from './components/AudioToggle';
import CountdownTimer from './components/CountdownTimer';
import VideoToggle from './components/VideoToggle';
import LandingPage from './view/LandingPage'; // Import the LandingPage component
import LoginPage from './view/LoginPage'; // Import the LoginPage component

function App() {
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [timerActive, setTimerActive] = useState(false);
  const timerDuration = 5;

  // Define a state variable to control which page is displayed
  const [currentPage, setCurrentPage] = useState('landing');

  let mediaRecorder;
  const chunks = [];

  const startRecording = async () => {
    // Your recording logic here
  };

  const stopRecording = () => {
    // Your stop recording logic here
  };

  const startCountdown = () => {
    // Your countdown logic here
  };

  const handleGetStartedClick = () => {
    // Redirect to the login page when "Get Started" is clicked
    setCurrentPage('login');
  };

  return (
    <div className="App">
      {/* Conditionally render the LandingPage or LoginPage based on currentPage */}
      {currentPage === 'landing' ? (
        <LandingPage onGetStartedClick={handleGetStartedClick} />
      ) : (
        <LoginPage />
      )}

      {/* Rest of your code */}
      
      <StartRecordingButton onClick={startCountdown} recording={recording} />
      <StopRecordingButton onClick={stopRecording} recording={recording} />
      <RecordingStatus recording={recording} />
      <AudioToggle audioEnabled={audioEnabled} onToggle={setAudioEnabled} />
      <VideoToggle videoEnabled={videoEnabled} onToggle={setVideoEnabled} />
      {timerActive && <CountdownTimer seconds={timerDuration} onTimerEnd={startRecording} />}
      {videoUrl && <VideoPlayer videoUrl={videoUrl} />}
    </div>
  );
}

export default App;
