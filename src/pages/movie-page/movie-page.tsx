import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import {ReactElement, useEffect} from 'react';
import FilmsList from '../../components/films-list/films-list';
import Tabs from '../../components/tabs/tabs';
import {useParams} from 'react-router-dom';
import {fetchFilmAction, fetchReviews, fetchSimilarFilmsAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';

const SIMILAR_FILMS_COUNT = 4;

function MoviePage(): ReactElement {
  const dispatch = useAppDispatch();

  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    dispatch(fetchFilmAction(id));
    dispatch(fetchSimilarFilmsAction(id));
    dispatch(fetchReviews(id));
  }, [dispatch, id]);

  const film = useAppSelector((state) => state.film);
  const similarFilms = useAppSelector((state) => state.similarFilms).slice(0, SIMILAR_FILMS_COUNT);
  const reviews = useAppSelector((state) => state.reviews);
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.posterImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218"
                height="327"
              />
            </div>
            <Tabs film={film} reviews={reviews}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList filmPreviews={similarFilms}/>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
