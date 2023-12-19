import {ReactElement} from 'react';
import {AppRoute} from '../../routes';
import {useNavigate} from 'react-router-dom';

type PlayVideoButtonProps = {
  filmId: string | undefined;
};

function PlayVideoButton({filmId} : PlayVideoButtonProps): ReactElement {
  const navigate = useNavigate();
  const onClick = () => {
    if (filmId) {
      navigate(AppRoute.Player(filmId));
    }
  };

  return (
    <button className="btn btn--play film-card__button" type="button" onClick={onClick}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayVideoButton;
