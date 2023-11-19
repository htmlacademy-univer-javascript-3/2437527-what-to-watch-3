import Logo from '../../components/logo/logo';
import {useParams} from 'react-router-dom';
import {AppRoute} from '../../routes';
import CommentSubmissionForm from '../../components/comment-submission-form/comment-submission-form';
import {ReactElement, useEffect} from 'react';
import UserBlock from '../../components/user-block/user-block';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFilmAction} from '../../store/api-actions';

function AddReview(): ReactElement {
  const dispatch = useAppDispatch();

  const params = useParams();
  const filmId = params.id as string;

  useEffect(() => {
    dispatch(fetchFilmAction(filmId));
  }, [dispatch, filmId]);

  const film = useAppSelector((state) => state.film);
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={`${film.name} image`}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href={AppRoute.Film(film.id)} className="breadcrumbs__link">{film.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218"
            height="327"
          />
        </div>
      </div>

      <CommentSubmissionForm filmId={filmId}/>
    </section>
  );
}

export default AddReview;
