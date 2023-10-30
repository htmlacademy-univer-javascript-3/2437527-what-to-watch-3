import Logo from '../../components/logo/logo';
import {useParams} from 'react-router-dom';
import {ReviewPage} from '../../types/review-page-type';
import {AppRoutes} from '../../routes';
import CommentSubmissionForm from '../../components/comment-submission-form/comment-submission-form';
import {ReactElement} from 'react';

function AddReview(reviews : ReviewPage[]): ReactElement {
  const params = useParams();
  const id = Number(params.id) ?? 1;
  const review : ReviewPage = reviews[id - 1];
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={review.bgImgSrc} alt={review.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href={AppRoutes.Film(review.id)} className="breadcrumbs__link">{review.title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={review.imgSrc} alt={review.title} width="218"
            height="327"
          />
        </div>
      </div>

      <CommentSubmissionForm />
    </section>
  );
}

export default AddReview;
