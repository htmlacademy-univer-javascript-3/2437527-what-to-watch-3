import {ReactElement, useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchFilmAction} from '../../store/api-actions/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {getFilm} from '../../store/films/selectors';
import Loader from '../../components/loader/loader';
import browserHistory from '../../components/history-route/browser-history';
import {getRemainingTime} from '../../helpers/get-remaining-time';


function Player(): ReactElement {
  const dispatch = useAppDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);

  const params = useParams();
  const filmId = params.id as string;
  const filmData = useAppSelector(getFilm);
  const film = filmData.film;
  const isFilmLoaded = filmData.isLoaded;
  const hasFilmError = filmData.hasError;

  useEffect(() => {
    dispatch(fetchFilmAction(filmId));
  }, [dispatch, filmId]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleDataLoaded = () => {
    setIsLoaded(true);
  };

  const onFullscreenButtonClick = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current?.requestFullscreen();
    }
  };

  const handleProgress = () => {
    const duration = videoRef.current?.duration as number;
    const currentTime = videoRef.current?.currentTime as number;
    setProgress(Math.round((currentTime / duration) * 100));
    setRemainingTime(Math.round(duration - currentTime));

    if (currentTime === duration) {
      setIsPlaying(false);
    }
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

    if (!playerElement) {
      return;
    }

    if (isPlaying) {
      playerElement.play();
      return;
    }

    playerElement.pause();
  }, [isLoaded, isPlaying]);


  if (!isFilmLoaded || hasFilmError) {
    return (
      <Loader isScreenLoader/>
    );
  }

  const togglerPosition = {
    left: `${progress.toString()}%`,
  };
  return (
    <div className="player">
      <video
        poster={film.backgroundImage}
        src={film.videoLink}
        ref={videoRef}
        className="player__video"
        onTimeUpdate={handleProgress}
      >
      </video>

      <button type="button" className="player__exit" onClick={() => {
        browserHistory.back();
      }}
      >Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"/>
            <div className="player__toggler" style={togglerPosition}>Toggler</div>
          </div>
          <div className="player__time-value">{getRemainingTime(remainingTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={() => setIsPlaying(((prevState) => !prevState))}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? '#pause' : '#play-s'}/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={onFullscreenButtonClick}>
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
