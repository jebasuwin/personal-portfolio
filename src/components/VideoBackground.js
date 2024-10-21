import React, { useEffect } from 'react';
import myVideo from '../assets/img/video1.mp4';
import '../App.css';

const VideoBackground = () => {

  useEffect(() => {
    const video = document.querySelector('.video-background video');
    const handleCanPlayThrough = () => {
      video.classList.add('ready'); 
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);

    
    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, []); 

  return (
    <div className="video-background">
      <video autoPlay muted loop className="video" id="background-video">
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
