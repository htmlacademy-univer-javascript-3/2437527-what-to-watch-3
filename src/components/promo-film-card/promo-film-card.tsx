import Logo from '../logo/logo';
import {PromoFilm} from '../../types/film-type';
import {ReactElement} from 'react';
import UserBlock from '../user-block/user-block';
import {useAppSelector} from '../../hooks';
import {getPromoFilm} from '../../store/films/selectors';
import AddFavoriteButton from '../add-favorite-button/add-favorite-button';

function PromoFilmCard(): ReactElement {
  const promoFilm : PromoFilm = useAppSelector(getPromoFilm).promoFilm as PromoFilm;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />

        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm.genre}</span>
              <span className="film-card__year">{promoFilm.released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>

              <AddFavoriteButton film={promoFilm}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoFilmCard;
