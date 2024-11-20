import React from 'react';
import shore from './shore.mp4';

const VideoHead = () => {
  return (
    <div className="video-container">
      <video className="video" src={shore} autoPlay loop muted>
      </video>
      <h1>Hakuna Matata</h1>

    </div>
  );
};

export default VideoHead;
