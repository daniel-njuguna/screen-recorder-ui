// Inside scripts.js

// Simulated video data (replace with actual API calls)
const videos = [
    { id: 1, title: 'Video 1', url: 'https://example.com/video1.mp4' },
    { id: 2, title: 'Video 2', url: 'https://example.com/video2.mp4' },
    { id: 3, title: 'Video 3', url: 'https://example.com/video3.mp4' },
  ];
  
  // Function to render video list
  function renderVideoList() {
    const videoList = document.getElementById('video-list');
  
    videos.forEach((video) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
  
      link.textContent = video.title;
      link.href = `video-view.html?id=${video.id}`; // Link to individual video view
      listItem.appendChild(link);
  
      videoList.appendChild(listItem);
    });
  }
  
  // Call the renderVideoList function to populate the video list
  renderVideoList();
  