import React, { useRef } from 'react';
import Video from '../assets/dubeer.mp4';
import './videoPlayer.css';

function VideoPlayer({ playState, setPlayState }) {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  }

  return (
    <div className={`video-player ${playState ? "" : "hide"}`} ref={player} onClick={closePlayer}>
      <video src={Video} autoPlay muted controls />
      <button className="close-btn" onClick={() => setPlayState(false)}>×</button>
    </div>
  );
}

export default VideoPlayer;
