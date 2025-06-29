import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './YouTubePlayer.css';

const YouTubePlayer = ({ videoId, thumbnailUrl, title, onVideoEnd, ytLink }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleThumbnailClick = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (onVideoEnd) {
      onVideoEnd();
    }
  };

  const extractVideoId = (url) => {
    if (!url) return null;
    
    // Handle different YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
      /youtu\.be\/([^&\n?#]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1];
      }
    }
    
    return null;
  };

  const extractedVideoId = videoId || extractVideoId(ytLink);

  if (!extractedVideoId) {
    return (
      <div className="youtube-player-container">
        <img 
          src={thumbnailUrl} 
          alt={title || 'Video thumbnail'} 
          className="youtube-thumbnail"
        />
      </div>
    );
  }

  if (isPlaying) {
    return (
      <div className="youtube-player-container">
        <iframe
          className="youtube-iframe"
          src={`https://www.youtube.com/embed/${extractedVideoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title || 'YouTube video'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsPlaying(true)}
        />
      </div>
    );
  }

  return (
    <div 
      className="youtube-player-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleThumbnailClick}
    >
      <img 
        src={thumbnailUrl} 
        alt={title || 'Video thumbnail'} 
        className="youtube-thumbnail"
      />
      
      {/* YouTube Play Button Overlay */}
      <div className={`youtube-play-overlay ${isHovered ? 'hovered' : ''}`}>
        <div className="youtube-play-button">
          <svg 
            viewBox="0 0 68 48" 
            className="youtube-play-icon"
          >
            <path 
              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
              fill="#f00"
            />
            <path 
              d="M 45,24 27,14 27,34" 
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

YouTubePlayer.propTypes = {
  videoId: PropTypes.string,
  thumbnailUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  onVideoEnd: PropTypes.func,
  ytLink: PropTypes.string,
};

export default YouTubePlayer; 