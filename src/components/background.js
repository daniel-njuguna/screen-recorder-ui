// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'startRecording') {
      // Perform the desired action in response to the "startRecording" message
      // For example, start recording here
  
      // Send a response back to the popup (optional)
      sendResponse({ status: 'Recording started' });
    } else if (request.action === 'stopRecording') {
      // Perform the desired action in response to the "stopRecording" message
      // For example, stop recording here
  
      // Send a response back to the popup (optional)
      sendResponse({ status: 'Recording stopped' });
    }
  });
  