import React, { useState, useEffect } from 'react';

const YouTubeVideo = ({ videoId, title }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Preconnect to YouTube's resources for faster loading
    const links = [
      'https://s.ytimg.com',
      'https://www.youtube.com',
      'https://www.google.com',
    ];
    links.forEach((link) => {
      const linkElement = document.createElement('link');
      linkElement.rel = 'preconnect';
      linkElement.crossOrigin = 'anonymous';
      linkElement.href = link;
      document.head.appendChild(linkElement);
    });
  }, []);

  return (
    <div>
      
      {videoLoaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allowFullScreen
          style={{
            top: 0,
            left: 0,
            width: '50dvb',
            height: '30dvb',
          }}
        />
      ) : (
        
        <h1>
          <div div style={{ textAlign: 'center', color: 'white', fontSize: '20px',fontFamily: 'Arial, sans-serif' }}>
          Click to play video</div>
        <img
          src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
          alt={`YouTube Thumbnail for ${title}`}
          onClick={() => setVideoLoaded(true)}
          style={{
            height: "30dvb",
            width: "50dvb",
            top: -150,
            borderRadius: '15px'
          }}
            />
        </h1>
      )}
    </div>
  );
};

export default YouTubeVideo;