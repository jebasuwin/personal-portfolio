import React from 'react';
import myVideo from '../assets/img/video1.mp4';
import '../App.css';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video" id="background-video">
        <source src={myVideo} type="video/mp4" />
        
      </video>
    </div>
  );
};

export default VideoBackground;
