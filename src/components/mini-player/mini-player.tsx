import {useState, useEffect, useRef, ReactElement} from 'react';

const MINI_PLAYER_MS_DELAY = 1000;
const MINI_PLAYER_WIDTH = '280';
const MINI_PLAYER_HEIGHT = '175';

type VideoPlayerProps = {
  videoSrc: string;
  poster: string;
}

function MiniPlayer({videoSrc, poster}: VideoPlayerProps): ReactElement {
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

    setTimeout(() => {
      playerElement.play();
    }, MINI_PLAYER_MS_DELAY);

  }, [isLoaded]);

  return (
    <video
      poster={poster}
      src={videoSrc}
      ref={videoRef}
      width={MINI_PLAYER_WIDTH}
      height={MINI_PLAYER_HEIGHT}
      muted
    >
    </video>
  );
}

export default MiniPlayer;
