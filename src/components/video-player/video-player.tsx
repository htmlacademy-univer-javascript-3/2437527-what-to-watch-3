import {useState, useEffect, useRef, ReactElement} from 'react';

const MINI_PLAYER_MS_DELAY = 1000;

type VideoPlayerProps = {
  isMiniPlayer: boolean;
  isPlaying: boolean;
  videoSrc: string;
  poster: string;
}

function VideoPlayer({isMiniPlayer, isPlaying, videoSrc, poster}: VideoPlayerProps): ReactElement {
  const [isLoaded, setIsLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleDataLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const playerElement = videoRef.current;
    if (!playerElement) {
      return;
    }

    playerElement.addEventListener('loadeddata', handleDataLoaded);

    return () => {
      playerElement.removeEventListener('loadeddata', handleDataLoaded);
    };
  }, []);

  useEffect(() => {
    const playerElement = videoRef.current;
    if (!isLoaded || !playerElement) {
      return;
    }

    if (isPlaying) {
      if (isMiniPlayer) {
        setTimeout(() => {
          playerElement.play();
        }, MINI_PLAYER_MS_DELAY);
      } else {
        playerElement.play();
      }
      return;
    }

    playerElement.pause();
  }, [isLoaded, isMiniPlayer, isPlaying]);

  return (
    <video
      poster={poster}
      src={videoSrc}
      ref={videoRef}
      width={isMiniPlayer ? '280' : '1600'}
      height={isMiniPlayer ? '175' : '900'}
      muted={isMiniPlayer}
    >
    </video>
  );
}

export default VideoPlayer;
