import {ReactElement} from 'react';
import {AppRoutes} from '../../const/app-routes';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {postFavorite} from '../../store/api-actions/api-actions';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getFavorites} from '../../store/favorites/selectors';
import {useNavigate} from 'react-router-dom';
import {FilmPreview} from '../../types/films/film-preview';
import {AuthorizationStatus} from '../../const/authorization-status';

type AddFavoriteButtonProps = {
  filmId: string | undefined;
};

function AddFavoriteButton({filmId} : AddFavoriteButtonProps): ReactElement {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favorites : FilmPreview[] = useAppSelector(getFavorites).favorites;
  const isFavorite = filmId ? favorites.map((favoriteFilm) => favoriteFilm.id).includes(filmId) : false;

  const onClick = () => {
    if (filmId) {
      if (authorizationStatus === AuthorizationStatus.Auth) {
        dispatch(postFavorite({filmId: filmId, status: +!isFavorite}));
      } else {
        navigate(AppRoutes.SignIn);
      }
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={onClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref= {authorizationStatus === AuthorizationStatus.Auth
        && isFavorite ? '#in-list' : '#add'}
        />
      </svg>
      <span>My list</span>
      { authorizationStatus === AuthorizationStatus.Auth
        && <span className="film-card__count">{favorites.length}</span> }
    </button>
  );
}

export default AddFavoriteButton;
