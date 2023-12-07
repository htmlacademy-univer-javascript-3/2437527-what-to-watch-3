import {Film, FilmPreview, PromoFilm} from '../../types/film-type';
import {ReactElement} from 'react';
import {AppRoute, AuthorizationStatus} from '../../routes';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {postFavorite} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getFavorites} from '../../store/favorites/selectors';
import {useNavigate} from 'react-router-dom';

type AddFavoriteButtonProps = {
  film: Film | PromoFilm;
};

function AddFavoriteButton({film} : AddFavoriteButtonProps): ReactElement {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favorites : FilmPreview[] = useAppSelector(getFavorites).favorites;
  const isFavorite = favorites.map((favoriteFilm) => favoriteFilm.id).includes(film.id);

  const onClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(postFavorite({filmId: film.id, status: +!isFavorite}));
    } else {
      navigate(AppRoute.SignIn);
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
