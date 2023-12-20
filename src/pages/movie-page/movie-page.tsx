import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import {ReactElement, useEffect} from 'react';
import FilmsList from '../../components/films-list/films-list';
import Tabs from '../../components/tabs/tabs';
import {Link, useParams} from 'react-router-dom';
import {
  fetchFilmAction,
  fetchReviewsAction,
  fetchSimilarFilmsAction
} from '../../store/api-actions/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import UserBlock from '../../components/user-block/user-block';
import {AppRoutes} from '../../const/app-routes';
import Loader from '../../components/loader/loader';
import {Film} from '../../types/films/film';
import {Review} from '../../types/review/review';
import {getFilm, getSimilarFilms} from '../../store/films/selectors';
import {getReviews} from '../../store/reviews/selectors';
import AddFavoriteButton from '../../components/add-favorite-button/add-favorite-button';
import PlayVideoButton from '../../components/play-video-button/play-video-button';
import {FilmPreview} from "../../types/films/film-preview";
import {AuthorizationStatus} from "../../const/authorization-status";

const SIMILAR_FILMS_COUNT = 4;

type MoviePageProps = {
  authorizationStatus: AuthorizationStatus;
}

function MoviePage({authorizationStatus} : MoviePageProps): ReactElement {
  const dispatch = useAppDispatch();

  const params = useParams();
  const filmId = params.id as string;

  useEffect(() => {
    dispatch(fetchFilmAction(filmId));
    dispatch(fetchSimilarFilmsAction(filmId));
    dispatch(fetchReviewsAction(filmId));
  }, [dispatch, filmId]);

  const film : Film = useAppSelector(getFilm).film as Film;
  const isFilmLoaded : boolean = useAppSelector(getFilm).isLoaded;
  const similarFilms : FilmPreview[] = useAppSelector(getSimilarFilms).slice(0, SIMILAR_FILMS_COUNT);
  const reviews : Review[] = useAppSelector(getReviews);

  if (!isFilmLoaded) {
    return (
      <Loader isScreenLoader/>
    );
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayVideoButton filmId={filmId} />

                {authorizationStatus === AuthorizationStatus.Auth &&
                  <AddFavoriteButton filmId={filmId}/>}

                {authorizationStatus === AuthorizationStatus.Auth &&
                  <Link to={AppRoutes.AddReview(filmId)} className="btn film-card__button">Add review</Link>}
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
