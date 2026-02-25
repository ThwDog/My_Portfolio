import React, { useEffect } from 'react';

const YouTubeVideo = ({ videoId, title }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&vq=hd1080`;

  useEffect(() => {
    // Preconnect to YouTube's resources for faster loading
    const links = [
      'https://s.ytimg.com',
      'https://www.youtube.com',
      'https://www.google.com',
    ];
    links.forEach((link) => {
      if (!document.querySelector(`link[rel="preconnect"][href="${link}"]`)) {
        const linkElement = document.createElement('link');
        linkElement.rel = 'preconnect';
        linkElement.crossOrigin = 'anonymous';
        linkElement.href = link;
        document.head.appendChild(linkElement);
      }
    });
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
          src={embedUrl}
          title={title || 'YouTube video'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '10px',
          }}
        />
    </div>
  );
};

export default YouTubeVideo;