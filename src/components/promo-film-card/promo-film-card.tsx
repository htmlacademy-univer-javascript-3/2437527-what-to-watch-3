import Logo from '../logo/logo';
import {ReactElement} from 'react';
import UserBlock from '../user-block/user-block';
import AddFavoriteButton from '../add-favorite-button/add-favorite-button';
import PlayVideoButton from '../play-video-button/play-video-button';
import {getPromoFilm} from '../../store/films/selectors';
import {useAppSelector} from '../../hooks/hooks';
import {AuthorizationStatus} from '../../const/authorization-status';

type PromoFilmCardProps = {
  authorizationStatus: AuthorizationStatus;
}

function PromoFilmCard({authorizationStatus} : PromoFilmCardProps): ReactElement {
  const promoFilm = useAppSelector(getPromoFilm).promoFilm;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm?.backgroundImage} alt={promoFilm?.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />

        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm?.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm?.genre}</span>
              <span className="film-card__year">{promoFilm?.released}</span>
            </p>

            <div className="film-card__buttons">
              <PlayVideoButton filmId={promoFilm?.id}/>

              {authorizationStatus === AuthorizationStatus.Auth &&
                <AddFavoriteButton filmId={promoFilm?.id}/>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoFilmCard;
