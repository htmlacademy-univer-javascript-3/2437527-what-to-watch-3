import {Video} from '../../types/video';
import VideoPlayer from '../../components/video-player/video-player';
import {ReactElement, useState} from 'react';

function Player(videoPlayer : Video): ReactElement {
  const [isPlaying, setIsPlaying] = useState(false);
  const style = {
    left: '30%'
  };
  return (
    <div className="player">
      <div className="player__video">
        <VideoPlayer isMiniPlayer={false} isPlaying={isPlaying}
          videoSrc={videoPlayer.videoSrc} poster={videoPlayer.poster}
        />
      </div>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"/>
            <div className="player__toggler" style={style}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={() => setIsPlaying(((prevState) => !prevState))}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
