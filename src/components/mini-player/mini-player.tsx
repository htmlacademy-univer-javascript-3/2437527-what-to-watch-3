import {useState, useEffect, useRef, ReactElement} from 'react';

const MiniPlayerSettings = {
  MsDelay: 1000,
  Width: '280',
  Height: '175'
} as const;

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
    }, MiniPlayerSettings.MsDelay);

  }, [isLoaded]);

  return (
    <video
      poster={poster}
      src={videoSrc}
      ref={videoRef}
      width={MiniPlayerSettings.Width}
      height={MiniPlayerSettings.Height}
      muted
    >
    </video>
  );
}

export default MiniPlayer;
